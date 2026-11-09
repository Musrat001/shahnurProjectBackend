import { google } from "googleapis";

const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
);

auth.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const sheets = google.sheets({
    version: "v4",
    auth,
});

export const saveContactToSheet = async (contact) => {
    try {
        const spreadsheetInfo = await sheets.spreadsheets.get({
            spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        });

        console.log(
            "Available worksheet names:",
            spreadsheetInfo.data.sheets.map(
                (sheet) => sheet.properties.title
            )
        );
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
            range: "'Contact Submissions'!A1:H",
            valueInputOption: "RAW",
            insertDataOption: "INSERT_ROWS",
            requestBody: {
                values: [[
                    Date.now().toString(),
                    contact.name,
                    contact.email,
                    contact.phone,
                    contact.subject,
                    contact.message,
                    contact.userType,
                    new Date().toISOString(),
                ]],
            },
        });

        return true;
    } catch (error) {
        console.error("Google Sheets Error:", error.message);
        throw error;
    }
};