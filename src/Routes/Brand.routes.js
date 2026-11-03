import express from "express";
import createUser from "../Controllers/Brand.controllers.js"

const router = express.Router();

// Create user / Submit contact form
router.post("/create", createUser);

export default router;
