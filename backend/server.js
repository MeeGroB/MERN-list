import dotenv from "dotenv";
import mongoose from "mongoose";

import {app} from "./app.js";

dotenv.config();

//Mongo DB connection
mongoose.connect(process.env.MONGODB_URI.replace("<DB_PASSWORD>", process.env.DATABASE_PASSWORD))
    .then(()=> console.log("MongoDB connected"))
    .catch((error)=> {
        console.log("MongoDB Connection Error")
    })

const PORT = process.env.PORT | 5000;

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
});