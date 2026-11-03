import express from "express";

import cors from "cors";
const app = express();



const corsOptions = {
    origin: [
        "http://localhost:5173",
        "https://shanur-project.vercel.app"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
app.use(express.json());

// for influencer
import userRouter from "./src/Routes/Influencer.routes.js";
app.use("/api/v1/users/influencer", userRouter);

// for brand
import brandRoutes from "./src/Routes/Brand.routes.js"
app.use("/api/v1/users/brand", brandRoutes);
export default app;