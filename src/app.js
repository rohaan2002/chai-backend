import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express ()

app.use(cors({
    origin: process.env.CORS_ORIGIN, //kaha kaha se allow krni h requests
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public")) //used to serve static file
app.use(cookieParser())  //user ke browser m cookie ki config change krne m help krta h


// importing routes

import userRouter  from './routes/user.router.js'

// routes declaration

app.use("/app/v1/users", userRouter)
// so routing shuru hi hogi once https://localhost:3000/app/v1/user hits; after that whatever there is in userRouter can apply  
export default {app};