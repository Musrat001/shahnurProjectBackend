import "dotenv/config";

import connectDb from "./db/index.js";
import app from "./App.js";

const PORT = process.env.PORT || 9228;

const startServer = async () => {
    try {
        await connectDb();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Server startup error:", error.message);
        process.exit(1);
    }
};

startServer();

