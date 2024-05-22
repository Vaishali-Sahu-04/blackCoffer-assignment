import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'

import dataRoutes from './routes/data.routes.js'

import connectMongoDb from './db/connectMongoDb.js'

dotenv.config();
const app = express()
const PORT=process.env.PORT || 5000;
//const __dirname=path.resolve();


app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
}));

app.use("/api/data",dataRoutes);

// app.use(express.static(path.join(__dirname,"/client/build")));

// app.get("*",(req,res)=> {
//     res.sendFile(path.join(__dirname,"client","build","index.html"));
// })

app.listen(PORT,()=>{
    console.log("Server started on port",PORT)
    connectMongoDb();
})