import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser= asyncHandler( async(req,res)=>{
    res.status(200).json({
        message: 'ok'
    })
})
// higher order func m pass krre ye async function
export default {registerUser};
//here object is exported with prop asyncHandler
// Accessing registerUser from the imported object
// myModule.registerUser();

// export default registerUser;
// Using registerUser directly
// registerUser();

