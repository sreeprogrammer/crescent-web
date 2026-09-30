const SHEET_HEADERS = [
  "Name",
  "Email",
  "Phone",
  "Program/Course",
  "Message",
  "Date & Time",
  "Submission Status",
];
const DEFAULT_SPREADSHEET_ID = "1nvBtbqgOO-zJKLdTgsqqfavGAEiNN5LGDAqYv-_s3Ig";

function doPost(request) {
  const data = JSON.parse(request.postData.contents);
  const properties = PropertiesService.getScriptProperties();
  const expectedSecret = properties.getProperty("CONTACT_SHARED_SECRET");

  if (!expectedSecret || data.secret !== expectedSecret) {
    return response({ success: false, message: "Unauthorized request." }, 401);
  }

  if (!data.submissionId) {
    return response({ success: false, message: "Missing submission id." }, 400);
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const processedKey = `processed_${data.submissionId}`;
    if (properties.getProperty(processedKey)) {
      return response({ success: true, duplicate: true });
    }

    const sheet = getSheet();
    const submittedAt = data.submittedAt || new Date().toISOString();
    const recipient = properties.getProperty("ENQUIRY_EMAIL");

    sheet.appendRow([
      data.name,
      data.email,
      data.phonenumber,
      data.program,
      data.message,
      submittedAt,
      "Submitted",
    ]);

    properties.setProperty(processedKey, new Date().toISOString());

    if (recipient) {
      try {
        MailApp.sendEmail({
          to: recipient,
          subject: `New enquiry - ${data.program}`,
          htmlBody: [
            "<h2>New enquiry</h2>",
            `<p><strong>Name:</strong> ${escapeHtml(data.name)}</p>`,
            `<p><strong>Email:</strong> ${escapeHtml(data.email)}</p>`,
            `<p><strong>Phone:</strong> ${escapeHtml(data.phonenumber)}</p>`,
            `<p><strong>Program/Course:</strong> ${escapeHtml(data.program)}</p>`,
            `<p><strong>Message:</strong><br>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>`,
            `<p><strong>Date & Time:</strong> ${escapeHtml(submittedAt)}</p>`,
          ].join(""),
        });
      } catch (error) {
        console.error("Enquiry saved, but notification email failed:", error);
      }
    }

    return response({ success: true });
  } finally {
    lock.releaseLock();
  }
}

function getSheet() {
  const properties = PropertiesService.getScriptProperties();
  const spreadsheet = SpreadsheetApp.openById(DEFAULT_SPREADSHEET_ID);
  const configuredSheetName = properties.getProperty("SHEET_NAME");
  const sheet = configuredSheetName
    ? spreadsheet.getSheetByName(configuredSheetName)
    : spreadsheet.getSheetByName("Enquiries") || spreadsheet.getSheets()[0];

  if (!sheet) {
    throw new Error(`Sheet '${configuredSheetName}' was not found.`);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(SHEET_HEADERS);
  }

  return sheet;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function response(body, statusCode) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
