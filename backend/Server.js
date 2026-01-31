import  express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/dbConfig.js";
import Userrouter from "./src/routes/Userrouter.js";
import Tasksrouter from "./src/routes/Tasksrouter.js";
import cors from "cors";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


connectDB();
app.use(express.json());
app.use(cors());


app.use("/api",Userrouter)
app.use("/api",Tasksrouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})