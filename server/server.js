import cookieParser from 'cookie-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import authRouter from "./routes/auth-routes.js"

mongoose.connect('mongodb+srv://sadiajavid31:sadia@cluster0.brlvqi5.mongodb.net/').then(()=>console.log("server is connected to MongoDB")).catch((error)=>console.log(error));
const app=express();
const PORT=process.env.PORT || 5000;
app.use(
    cors({
        origin:'http://localhost:5173/',
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:[
            'Content-Type',
            'Authorization',
            'Expiry',
            'Pragma',
            'Cache-Control'
        ],
        credentials:true
    })

);
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth',authRouter)
app.listen(PORT,()=>console.log(`server is running on Port ${PORT}`))




