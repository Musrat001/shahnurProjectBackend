import express from "express";
import createUser from "../Controllers/Influencer.controllers.js"

const router = express.Router();

// Create user / Submit contact form
router.post("/create", createUser);

export default router;
