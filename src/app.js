import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: '16kb' }));

app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}));

app.use(express.static('public'));

app.use(cookieParser());


// Importing Routes
import { router as userRouter } from "./routes/user.routes.js";


// Declaring Routes
app.use('/api/v1/users', userRouter);

// Example of a Standard API URL Structure: http://localhost:3000/api/v1/users/register

export { app };