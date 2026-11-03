
import Influencer from "../Models/Influencer.models.js";

const createUser = async (req, res) => {
    try {
        // Get data from request body
        const { name, email, phone, subject, message } = req.body;

        // Validate required fields
        if (!name || !email || !phone || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Create new user document
        const user = await Influencer.create({
            name,
            email,
            phone,
            subject,
            message
        });

        // Send response
        return res.status(201).json({
            success: true,
            message: "Message submitted successfully",
            data: user
        });

    } catch (error) {
        console.error("Error creating user:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

export default createUser;

