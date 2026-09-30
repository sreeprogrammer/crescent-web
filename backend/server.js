
// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// const PORT = process.env.PORT || 5000;
// const GOOGLE_APPS_SCRIPT_URL =
//   process.env.GOOGLE_APPS_SCRIPT_URL;
// const GOOGLE_APPS_SCRIPT_SECRET =
//   process.env.GOOGLE_APPS_SCRIPT_SECRET;

// // ==================================================
// // MIDDLEWARE
// // ==================================================

// app.use(
//   cors({
//     origin: true,
//     methods: ["GET", "POST", "OPTIONS"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

// app.use(express.json({ limit: "32kb" }));

// // ==================================================
// // HELPER
// // ==================================================

// function clean(value) {
//   return typeof value === "string"
//     ? value.trim()
//     : "";
// }

// // ==================================================
// // HEALTH CHECK
// // ==================================================

// app.get("/health", (_req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Server is running",
//   });
// });

// // ==================================================
// // CONTACT FORM
// // ==================================================

// app.post("/api/contact", async (req, res) => {
//   try {
//     console.log("Contact form request received");

//     // ----------------------------------------------
//     // GET FORM DATA
//     // ----------------------------------------------

//     const payload = {
//       submissionId: clean(req.body.submissionId),

//       name: clean(req.body.name),

//       email: clean(req.body.email),

//       phonenumber: clean(req.body.phonenumber),

//       program: clean(req.body.program),

//       message: clean(req.body.message),

//       submittedAt: new Date().toISOString(),

//       status: "Submitted",
//     };

//     // ----------------------------------------------
//     // VALIDATION
//     // ----------------------------------------------

//     if (
//       !payload.submissionId ||
//       !payload.name ||
//       !payload.email ||
//       !payload.phonenumber ||
//       !payload.program ||
//       !payload.message
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required.",
//       });
//     }

//     // ----------------------------------------------
//     // EMAIL VALIDATION
//     // ----------------------------------------------

//     const emailRegex =
//       /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(payload.email)) {
//       return res.status(400).json({
//         success: false,
//         message:
//           "Please provide a valid email address.",
//       });
//     }

//     // ----------------------------------------------
//     // CHECK GOOGLE CONFIGURATION
//     // ----------------------------------------------

//     if (!GOOGLE_APPS_SCRIPT_URL) {
//       console.error(
//         "GOOGLE_APPS_SCRIPT_URL is missing"
//       );

//       return res.status(500).json({
//         success: false,
//         message:
//           "Google Apps Script URL is not configured.",
//       });
//     }

//     if (!GOOGLE_APPS_SCRIPT_SECRET) {
//       console.error(
//         "GOOGLE_APPS_SCRIPT_SECRET is missing"
//       );

//       return res.status(500).json({
//         success: false,
//         message:
//           "Google Apps Script secret is not configured.",
//       });
//     }

//     // ----------------------------------------------
//     // SEND TO GOOGLE APPS SCRIPT
//     // ----------------------------------------------

//     console.log(
//       "Sending enquiry to Google Apps Script..."
//     );

//     const googleResponse = await fetch(
//       GOOGLE_APPS_SCRIPT_URL,
//       {
//         method: "POST",

//         headers: {
//           "Content-Type": "application/json",
//         },

//         body: JSON.stringify({
//           submissionId: payload.submissionId,

//           name: payload.name,

//           email: payload.email,

//           phonenumber: payload.phonenumber,

//           program: payload.program,

//           message: payload.message,

//           submittedAt: payload.submittedAt,

//           status: payload.status,

//           secret: GOOGLE_APPS_SCRIPT_SECRET,
//         }),
//       }
//     );

//     // ----------------------------------------------
//     // GET GOOGLE RESPONSE
//     // ----------------------------------------------

//     const responseText =
//       await googleResponse.text();

//     console.log(
//       "Google Apps Script response:",
//       responseText
//     );

//     let googleResult;

//     try {
//       googleResult =
//         JSON.parse(responseText);
//     } catch (error) {
//       console.error(
//         "Could not parse Google response"
//       );

//       return res.status(502).json({
//         success: false,
//         message:
//           "Invalid response from Google Apps Script.",
//       });
//     }

//     // ----------------------------------------------
//     // CHECK GOOGLE RESULT
//     // ----------------------------------------------

//     if (
//       !googleResponse.ok ||
//       !googleResult.success
//     ) {
//       console.error(
//         "Google Apps Script failed:",
//         googleResult
//       );

//       return res.status(502).json({
//         success: false,
//         message:
//           googleResult.message ||
//           "Failed to save enquiry.",
//       });
//     }

//     // ----------------------------------------------
//     // SUCCESS
//     // ----------------------------------------------

//     console.log(
//       "================================="
//     );

//     console.log(
//       "ENQUIRY SUBMITTED SUCCESSFULLY"
//     );

//     console.log(
//       "Submission ID:",
//       payload.submissionId
//     );

//     console.log(
//       "================================="
//     );

//     return res.status(200).json({
//       success: true,

//       message:
//         "Thank you! Your enquiry has been submitted successfully.",

//       submissionId:
//         payload.submissionId,
//     });

//   } catch (error) {
//     console.error(
//       "Contact form error:",
//       error
//     );

//     return res.status(500).json({
//       success: false,

//       message:
//         "Failed to submit contact form. Please try again.",
//     });
//   }
// });

// // ==================================================
// // 404
// // ==================================================

// app.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Route not found.",
//   });
// });

// // ==================================================
// // SERVER ERROR
// // ==================================================

// app.use(
//   (error, _req, res, _next) => {
//     console.error(
//       "Server error:",
//       error
//     );

//     res.status(500).json({
//       success: false,
//       message:
//         "Internal server error.",
//     });
//   }
// );

// // ==================================================
// // START EXPRESS SERVER
// // ==================================================

// app.listen(PORT, () => {
//   console.log("");
//   console.log(
//     "================================="
//   );

//   console.log(
//     `Express server running on port ${PORT}`
//   );

//   console.log(
//     `Health: http://localhost:${PORT}/health`
//   );

//   console.log(
//     `Contact API: http://localhost:${PORT}/api/contact`
//   );

//   console.log(
//     "================================="
//   );

//   console.log("");
// });


const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { google } = require("googleapis");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

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
// GOOGLE SHEET DETAILS
// ======================================================

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = process.env.GOOGLE_SHEET_NAME || "Sheet1";

// ======================================================
// TEST ROUTE
// ======================================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Contact API is running",
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
        message: "Please fill all required fields.",
      });
    }

    // --------------------------------------------------
    // DATA TO GOOGLE SHEET
    // --------------------------------------------------

    const row = [
      new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
      submissionId || "",
      name.trim(),
      email.trim(),
      phonenumber.trim(),
      program.trim(),
      message.trim(),
    ];

    // --------------------------------------------------
    // APPEND TO GOOGLE SHEET
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

    // --------------------------------------------------
    // SUCCESS
    // --------------------------------------------------

    return res.status(200).json({
      success: true,
      message: "Thank you! Your enquiry has been submitted successfully.",
    });

  } catch (error) {
    console.error(
      "Google Sheets submission error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to save enquiry. Please try again.",
    });
  }
});

// ======================================================
// START SERVER
// ======================================================

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});