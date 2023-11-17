import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        fullname: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            index: true  //its used for searching, tho its costly nd affect performance
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        avatar: {
            type: String, //kyuki cloudinary like website pe upload krke URL as a string use krenge
            required: true
        },
        coverImage: {
            type: String //cloudinary url
        },
        watchHistory: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true  //for createdAt updatedAt
    })

    // pre hook mongoose m hota to allow you to perform a func before a certain action like "save"
    // also callback m function keyword se function bnana nit thru arrow cz usme this reference ni hota jo ki jruri hota iss hook m 
userSchema.pre("save", async function(next){
    if(!this.isModified("password")){ next() };
    // agr current object ka pass modified NHI hua h to 

    this.password = bcrypt.hash(this.password, 10) //this 10 is rounds, how many times that algo is applied
    next();
})

// now to know if password is correct, we use mongoose method like this one
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}
// bcrypt takes time to encypt so we use async

userSchema.methods.generateAccessToken= function(){
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
    // jwt.sign takes 3 args - payload object token secret and token expiry(IN THE GIVEN OBJECT SYNTAX)
}

userSchema.methods.generateRefreshToken= function(){
    jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
// same as above but REFRESH TOKEN has much smaller payload


export const User = mongoose.model("User", userSchema)