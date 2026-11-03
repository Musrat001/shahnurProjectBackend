import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connected successfully");

    } catch (error) {
        console.error("Error while connecting to Database:", error.message);

        throw error;
    }
};

export default connectDb;