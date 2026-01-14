import express from "express";
import cors from "cors";

import router from "./routes/userRoutes.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Routes
app.use("/api/v1/users", router)

export {
    app
}  
