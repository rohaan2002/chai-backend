// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDB from './db/index.js';
// import mongoose from 'mongoose';
// import {DB_NAME} from './constants';

dotenv.config({
    path: './env'
})



connectDB()






// import express from 'express'
// const app = express()

//********* */ RULE OF THUMB WHILE HANDLING ANY DATA FETCHING FROM YHE DATABASE IS THAT:**********
// 1. USE TRY-CATCH : HUGE CHANCES YOUD RUN INTO AN ERROR
// 2. DATABASE IS STORED ACROSS DIFF CITIES OR EVEN CONTINENT IN SERVERS SO USE ASYNC-AWAIT OR PROMISES WHEN USING URL

// -------------------------------------
// FIRST APPROACH TO CONNECT DB IS MAKING AN IIFE FUNCTION WITH ASYNC AWAIT IN SAME FILE
// -------------------------------------
// IIFE function which is async await too
// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERR:",error);
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch(error){
//         console.log("ERROR: ",error)
//         throw err
//     }
// })()