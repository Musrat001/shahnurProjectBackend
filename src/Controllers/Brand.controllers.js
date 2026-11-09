
// import Brand from "../Models/Brand.models.js";

// const createUser = async (req, res) => {
//     try {
//         // Get data from request body
//         const { name, email, phone, subject, message, userType } = req.body;

//         // Validate required fields
//         if (!name || !email || !phone || !subject || !message) {
//             return res.status(400).json({
//                 success: false,
//                 message: "All fields are required"
//             });
//         }



//         // Create new user document
//         const user = await Brand.create({
//             name,
//             email,
//             phone,
//             subject,
//             message,
//             userType
//         });

//         // Send response
//         return res.status(201).json({
//             success: true,
//             message: "Message submitted successfully",
//             data: user
//         });

//     } catch (error) {
//         console.error("Error creating user:", error);

//         return res.status(500).json({
//             success: false,
//             message: "Internal server error",
//             error: error.message
//         });
//     }
// };

// export default createUser;


import { saveContactToSheet } from "../config/googleSheet.js";

const createUser = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            subject,
            message,
            userType
        } = req.body;

        // Validate required fields
        if (!name || !email || !phone || !subject || !message || !userType) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Save contact submission to Google Sheets
        await saveContactToSheet({
            name,
            email,
            phone,
            subject,
            message,
            userType
        });

        return res.status(201).json({
            success: true,
            message: "Message submitted successfully"
        });

    } catch (error) {
        console.error("Error submitting contact form:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to submit message"
        });
    }
};

export default createUser;
