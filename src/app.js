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

export default app;