import express from "express";
import oauth2Client from "../config/googleConfig.js";

const router = express.Router();

// Step 1: Redirect user to Google
router.get("/google", (req, res) => {

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",

    scope: [
      "https://www.googleapis.com/auth/spreadsheets"
    ],

    prompt: "consent"
  });

  res.redirect(authUrl);
});


// Step 2: Handle Google's callback
router.get("/google/callback", async (req, res) => {

  try {

    const { code } = req.query;

    if (!code) {
      return res.status(400).send("Authorization code missing");
    }

    const { tokens } = await oauth2Client.getToken(code);

    console.log("Google authentication successful!");

    if (tokens.refresh_token) {
      console.log("Your refresh token:", tokens.refresh_token);

      return res.send(
        "Google authentication successful! Check your backend terminal for the refresh token."
      );
    }

    res.send(
      "Authentication successful, but no new refresh token was returned. Check your existing token."
    );

  } catch (error) {

    console.error("Google authentication error:", error.message);

    res.status(500).send("Google authentication failed");

  }

});

export default router;