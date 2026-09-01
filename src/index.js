import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config();

const port = process.env.PORT || 8000;

connectDB()
.then(() => {
    app.on('error', (error) => {
        console.log('ERROR: ', error);
        throw error;
    });

    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    })
})
.catch((error) => {
    console.log('MongoDB Connection Failed: ', error);
})