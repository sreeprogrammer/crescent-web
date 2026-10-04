const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const cron = require("node-cron");
const XLSX = require("xlsx");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// ======================================================
// CONFIGURATION
// ======================================================

const TIME_ZONE = "Asia/Kolkata";

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = process.env.GOOGLE_SHEET_NAME || "Sheet1";
const REPORT_LOG_SHEET =
  process.env.REPORT_LOG_SHEET || "ReportLog";

const COLLEGE_EMAIL = process.env.COLLEGE_EMAIL;

// SMTP
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_SECURE =
  process.env.SMTP_SECURE === "true";

const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

// ======================================================
// GOOGLE SHEETS AUTHENTICATION
// ======================================================

const auth = new google.auth.GoogleAuth({
  keyFile: "./credentials.json",
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

const sheets = google.sheets({
  version: "v4",
  auth,
});

// ======================================================
// EMAIL CONFIGURATION
// ======================================================

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
  },
});

// ======================================================
// ENVIRONMENT VALIDATION
// ======================================================

const requiredEnvironmentVariables = [
  "GOOGLE_SHEET_ID",
  "COLLEGE_EMAIL",
  "SMTP_HOST",
  "SMTP_USER",
  "SMTP_PASSWORD",
];

for (const variable of requiredEnvironmentVariables) {
  if (!process.env[variable]) {
    console.warn(
      `WARNING: ${variable} is missing from .env`
    );
  }
}

// ======================================================
// TIME HELPERS
// ======================================================

function getISTDate(date = new Date()) {
  const formatter = new Intl.DateTimeFormat(
    "en-CA",
    {
      timeZone: TIME_ZONE,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }
  );

  return formatter.format(date);
}

// Returns YYYY-MM-DD
function getTodayIST() {
  return getISTDate(new Date());
}

// Returns previous YYYY-MM-DD
function getPreviousISTDate() {
  const now = new Date();

  const istDateString = getISTDate(now);

  const [year, month, day] =
    istDateString.split("-").map(Number);

  const date = new Date(
    Date.UTC(year, month - 1, day)
  );

  date.setUTCDate(date.getUTCDate() - 1);

  return date.toISOString().slice(0, 10);
}

// ======================================================
// TIMESTAMP FOR GOOGLE SHEETS
// ======================================================

function getCurrentISTTimestamp() {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat(
    "en-GB",
    {
      timeZone: TIME_ZONE,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }
  );

  const parts = formatter.formatToParts(now);

  const get = (type) =>
    parts.find((part) => part.type === type)?.value;

  return `${get("year")}-${get("month")}-${get(
    "day"
  )} ${get("hour")}:${get("minute")}:${get(
    "second"
  )}`;
}

// ======================================================
// EXTRACT DATE FROM SHEET TIMESTAMP
// ======================================================

function extractDateFromTimestamp(timestamp) {
  if (!timestamp) {
    return null;
  }

  const value = String(timestamp).trim();

  // New format:
  // YYYY-MM-DD HH:mm:ss
  const newFormat = value.match(
    /^(\d{4})-(\d{2})-(\d{2})/
  );

  if (newFormat) {
    return newFormat[0];
  }

  // Old format from your previous backend:
  // DD/MM/YYYY, HH:mm:ss
  const oldFormat = value.match(
    /^(\d{2})\/(\d{2})\/(\d{4})/
  );

  if (oldFormat) {
    const [, day, month, year] = oldFormat;

    return `${year}-${month}-${day}`;
  }

  return null;
}

// ======================================================
// GOOGLE SHEET HEADER
// ======================================================

async function ensureMainSheetHeader() {
  const response =
    await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1:G1`,
    });

  const values = response.data.values || [];

  if (
    values.length === 0 ||
    values[0].length === 0
  ) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1:G1`,
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            "Timestamp",
            "Submission ID",
            "Name",
            "Email",
            "Phone Number",
            "Program",
            "Message",
          ],
        ],
      },
    });

    console.log(
      `Created header in ${SHEET_NAME}`
    );
  }
}

// ======================================================
// CREATE REPORT LOG SHEET
// ======================================================

async function ensureReportLogSheet() {
  const spreadsheet =
    await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
    });

  const existingSheets =
    spreadsheet.data.sheets || [];

  const exists = existingSheets.some(
    (sheet) =>
      sheet.properties?.title ===
      REPORT_LOG_SHEET
  );

  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: REPORT_LOG_SHEET,
              },
            },
          },
        ],
      },
    });

    console.log(
      `Created ${REPORT_LOG_SHEET} sheet`
    );
  }

  const response =
    await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${REPORT_LOG_SHEET}!A1:C1`,
    });

  const values = response.data.values || [];

  if (
    values.length === 0 ||
    values[0].length === 0
  ) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${REPORT_LOG_SHEET}!A1:C1`,
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            "Report Date",
            "Sent At",
            "Enquiry Count",
          ],
        ],
      },
    });
  }
}

// ======================================================
// CHECK WHETHER REPORT WAS ALREADY SENT
// ======================================================

async function hasReportAlreadyBeenSent(
  reportDate
) {
  const response =
    await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${REPORT_LOG_SHEET}!A:C`,
    });

  const rows = response.data.values || [];

  if (rows.length <= 1) {
    return false;
  }

  return rows
    .slice(1)
    .some(
      (row) =>
        String(row[0] || "").trim() ===
        reportDate
    );
}

// ======================================================
// SAVE REPORT LOG
// ======================================================

async function saveReportLog(
  reportDate,
  enquiryCount
) {
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: `${REPORT_LOG_SHEET}!A:C`,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          reportDate,
          getCurrentISTTimestamp(),
          enquiryCount,
        ],
      ],
    },
  });
}

// ======================================================
// TEST EMAIL CONNECTION
// ======================================================

async function verifyEmailConnection() {
  try {
    await transporter.verify();

    console.log(
      "Email SMTP connection successful."
    );
  } catch (error) {
    console.error(
      "Email SMTP connection failed:"
    );
    console.error(error.message);
  }
}

// ======================================================
// TEST ROUTE
// ======================================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "College Enquiry API is running",
    timezone: TIME_ZONE,
    today: getTodayIST(),
  });
});

// ======================================================
// CONTACT / ENQUIRY SUBMISSION
// ======================================================

app.post("/api/contact", async (req, res) => {
  try {
    const {
      submissionId,
      name,
      email,
      phonenumber,
      program,
      message,
    } = req.body;

    // --------------------------------------------------
    // VALIDATION
    // --------------------------------------------------

    if (
      !name ||
      !email ||
      !phonenumber ||
      !program ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please fill all required fields.",
      });
    }

    // --------------------------------------------------
    // CREATE ROW
    // --------------------------------------------------

    const timestamp =
      getCurrentISTTimestamp();

    const row = [
      timestamp,
      submissionId || "",
      String(name).trim(),
      String(email).trim(),
      String(phonenumber).trim(),
      String(program).trim(),
      String(message).trim(),
    ];

    // --------------------------------------------------
    // SAVE TO GOOGLE SHEETS
    // --------------------------------------------------

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,

      range: `${SHEET_NAME}!A:G`,

      valueInputOption: "USER_ENTERED",

      insertDataOption: "INSERT_ROWS",

      requestBody: {
        values: [row],
      },
    });

    console.log(
      `New enquiry saved: ${name} | ${email}`
    );

    // --------------------------------------------------
    // RESPONSE
    // --------------------------------------------------

    return res.status(200).json({
      success: true,
      message:
        "Thank you! Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error(
      "Google Sheets submission error:"
    );

    console.error(error);

    return res.status(500).json({
      success: false,
      message:
        "Failed to save enquiry. Please try again.",
    });
  }
});

// ======================================================
// GET ALL ENQUIRIES
// ======================================================

async function getAllEnquiries() {
  const response =
    await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:G`,
    });

  const rows = response.data.values || [];

  if (rows.length <= 1) {
    return [];
  }

  return rows
    .slice(1)
    .filter((row) => row.length > 0)
    .map((row) => ({
      timestamp: row[0] || "",
      submissionId: row[1] || "",
      name: row[2] || "",
      email: row[3] || "",
      phonenumber: row[4] || "",
      program: row[5] || "",
      message: row[6] || "",
    }));
}

// ======================================================
// GET DAILY ENQUIRIES
// ======================================================

async function getDailyEnquiries(
  reportDate
) {
  const enquiries =
    await getAllEnquiries();

  return enquiries.filter((enquiry) => {
    const enquiryDate =
      extractDateFromTimestamp(
        enquiry.timestamp
      );

    return enquiryDate === reportDate;
  });
}

// ======================================================
// CREATE EXCEL WORKBOOK
// ======================================================

function createExcelFile(
  enquiries,
  reportDate
) {
  const excelData = enquiries.map(
    (enquiry, index) => ({
      "S.No": index + 1,
      "Date & Time": enquiry.timestamp,
      "Submission ID":
        enquiry.submissionId,
      "Name": enquiry.name,
      "Email": enquiry.email,
      "Phone Number":
        enquiry.phonenumber,
      "Program": enquiry.program,
      "Message": enquiry.message,
    })
  );

  const worksheet =
    XLSX.utils.json_to_sheet(excelData);

  // --------------------------------------------------
  // COLUMN WIDTHS
  // --------------------------------------------------

  worksheet["!cols"] = [
    { wch: 8 },  // S.No
    { wch: 22 }, // Date
    { wch: 20 }, // Submission ID
    { wch: 25 }, // Name
    { wch: 35 }, // Email
    { wch: 18 }, // Phone
    { wch: 25 }, // Program
    { wch: 70 }, // Message
  ];

  // --------------------------------------------------
  // FREEZE FIRST ROW
  // --------------------------------------------------

  worksheet["!freeze"] = {
    xSplit: 0,
    ySplit: 1,
  };

  // --------------------------------------------------
  // AUTO FILTER
  // --------------------------------------------------

  if (excelData.length > 0) {
    worksheet["!autofilter"] = {
      ref: `A1:H${
        excelData.length + 1
      }`,
    };
  }

  // --------------------------------------------------
  // WORKBOOK
  // --------------------------------------------------

  const workbook =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Daily Enquiries"
  );

  // --------------------------------------------------
  // CREATE BUFFER
  // --------------------------------------------------

  const excelBuffer =
    XLSX.write(workbook, {
      type: "buffer",
      bookType: "xlsx",
    });

  return excelBuffer;
}

// ======================================================
// SEND DAILY REPORT EMAIL
// ======================================================

async function sendDailyReport(
  reportDate
) {
  console.log(
    "=========================================="
  );

  console.log(
    `Preparing report for: ${reportDate}`
  );

  // --------------------------------------------------
  // DUPLICATE PROTECTION
  // --------------------------------------------------

  const alreadySent =
    await hasReportAlreadyBeenSent(
      reportDate
    );

  if (alreadySent) {
    console.log(
      `Report for ${reportDate} was already sent.`
    );

    console.log(
      "Skipping duplicate email."
    );

    return {
      success: true,
      alreadySent: true,
      count: 0,
    };
  }

  // --------------------------------------------------
  // GET ENQUIRIES
  // --------------------------------------------------

  const enquiries =
    await getDailyEnquiries(
      reportDate
    );

  console.log(
    `Found ${enquiries.length} enquiries.`
  );

  // --------------------------------------------------
  // NO ENQUIRIES
  // --------------------------------------------------

  if (enquiries.length === 0) {
    console.log(
      `No enquiries found for ${reportDate}.`
    );

    console.log(
      "No email will be sent."
    );

    return {
      success: true,
      alreadySent: false,
      count: 0,
    };
  }

  // --------------------------------------------------
  // CREATE EXCEL
  // --------------------------------------------------

  const excelBuffer =
    createExcelFile(
      enquiries,
      reportDate
    );

  const filename =
    `Daily-Enquiry-Report-${reportDate}.xlsx`;

  // --------------------------------------------------
  // EMAIL DATE
  // --------------------------------------------------

  const dateObject =
    new Date(
      `${reportDate}T00:00:00+05:30`
    );

  const formattedDate =
    new Intl.DateTimeFormat(
      "en-IN",
      {
        timeZone: TIME_ZONE,
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ).format(dateObject);

  // --------------------------------------------------
  // SEND EMAIL
  // --------------------------------------------------

  await transporter.sendMail({
    from: SMTP_USER,
    to: COLLEGE_EMAIL,

    subject:
      `Daily Enquiry Report - ${formattedDate}`,

    text:
      `Dear Team,

Please find attached the Daily Enquiry Report for ${formattedDate}.

Total enquiries received: ${enquiries.length}

The attached Excel file contains all enquiries received during the 24-hour period.

Regards,
College Enquiry System`,

    html: `
      <div style="font-family: Arial, sans-serif;">
        <p>Dear Team,</p>

        <p>
          Please find attached the
          <strong>Daily Enquiry Report</strong>
          for <strong>${formattedDate}</strong>.
        </p>

        <p>
          <strong>Total enquiries:</strong>
          ${enquiries.length}
        </p>

        <p>
          The attached Excel file contains all
          enquiries received during the 24-hour period.
        </p>

        <p>
          Regards,<br>
          <strong>College Enquiry System</strong>
        </p>
      </div>
    `,

    attachments: [
      {
        filename,
        content: excelBuffer,
        contentType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    ],
  });

  // --------------------------------------------------
  // SAVE REPORT LOG
  // --------------------------------------------------

  await saveReportLog(
    reportDate,
    enquiries.length
  );

  console.log(
    `Report successfully emailed to ${COLLEGE_EMAIL}`
  );

  console.log(
    `Excel file: ${filename}`
  );

  console.log(
    "=========================================="
  );

  return {
    success: true,
    alreadySent: false,
    count: enquiries.length,
  };
}

// ======================================================
// MIDNIGHT AUTOMATIC SCHEDULER
// ======================================================
//
// Every day at exactly 12:00 AM IST.
//
// The report being sent is for the PREVIOUS day.
//
// Example:
//
// October 5, 12:00 AM
//       ↓
// Send October 4 report
//
// ======================================================

cron.schedule(
  "0 0 * * *",
  async () => {
    console.log(
      "MIDNIGHT: Daily report scheduler started."
    );

    try {
      const previousDate =
        getPreviousISTDate();

      await sendDailyReport(
        previousDate
      );
    } catch (error) {
      console.error(
        "Automatic daily report failed:"
      );

      console.error(error);
    }
  },
  {
    timezone: TIME_ZONE,
  }
);

// ======================================================
// MANUAL TEST REPORT
// ======================================================
//
// This route is useful during development.
//
// Example:
// GET
// http://localhost:5000/api/send-daily-report
//
// It sends the report for YESTERDAY.
//
// ======================================================

app.get(
  "/api/send-daily-report",
  async (req, res) => {
    try {
      const previousDate =
        getPreviousISTDate();

      const result =
        await sendDailyReport(
          previousDate
        );

      return res.json({
        success: true,
        reportDate: previousDate,
        ...result,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message:
          "Failed to send daily report.",
        error:
          error.message,
      });
    }
  }
);

// ======================================================
// MANUAL REPORT FOR A SPECIFIC DATE
// ======================================================
//
// Example:
//
// /api/send-report?date=2026-10-04
//
// ======================================================

app.get(
  "/api/send-report",
  async (req, res) => {
    try {
      const { date } = req.query;

      if (!date) {
        return res.status(400).json({
          success: false,
          message:
            "Please provide date in YYYY-MM-DD format.",
        });
      }

      if (
        !/^\d{4}-\d{2}-\d{2}$/.test(date)
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid date format. Use YYYY-MM-DD.",
        });
      }

      const result =
        await sendDailyReport(date);

      return res.json({
        success: true,
        reportDate: date,
        ...result,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message:
          "Failed to send report.",
        error:
          error.message,
      });
    }
  }
);

// ======================================================
// START SERVER
// ======================================================

async function startServer() { 
  try {
    // Make sure the main sheet has headers.
    await ensureMainSheetHeader();

    // Make sure ReportLog exists.
    await ensureReportLogSheet();

    // Verify SMTP.
    await verifyEmailConnection();

    app.listen(PORT, () => {
      console.log(
        "=========================================="
      );

      console.log(
        `Server running on http://localhost:${PORT}`
      );

      console.log(
        `Timezone: ${TIME_ZONE}`
      );

      console.log(
        "Google Sheets: CONNECTED"
      );

      console.log(
        "Daily Excel report: ENABLED"
      );

      console.log(
        "Automatic report time: 12:00 AM IST"
      );

      console.log(
        `Report recipient: ${COLLEGE_EMAIL}`
      );

      console.log(
        "=========================================="
      );
    });
  } catch (error) {
    console.error(
      "Failed to start server:"
    );

    console.error(error);

    process.exit(1);
  }
}

startServer();