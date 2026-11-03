import mongoose from "mongoose";

const influencerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },

        phone: {
            type: String,
            required: true,
            trim: true
        },

        subject: {
            type: String,
            required: true,
            trim: true
        },

        message: {
            type: String,
            required: true,
            trim: true
        },
        userType: {
            type: String,
            required: true,
            default: "Influencer"
        },
    },
    {
        timestamps: true
    }
);

const Influencer = mongoose.model("Influencer", influencerSchema);

export default Influencer;

