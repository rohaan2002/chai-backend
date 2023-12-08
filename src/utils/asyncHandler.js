// const asyncHandler=()=>{

// }


// -----ANATOMY OF A HIGHER ORDER FUNCTION IN JS-----
// const asyncHandler = ()=> { }
// const asyncHandler = (func)=>{ ()=>{} }
// const asyncHandler = (func)=> { async()=> {} }


// a wrapper function whill we'll use to fetch apis and such
// const asyncHandler= (fn)=>{ async(req,res,next)=>{
    //     try{
        //         await fn(req,res,next)
        //     } catch(error){
            //         res.status(err.code || 500).json({
                //             success: false,
                //             message: err.message
                //         })
                //     }
                // }}
                
// export {asyncHandler};



const asyncHandler = (requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err)) //promise.resolve makes the return value into a promise, so if its resolved then good if it doesnt, the error get caught in catch, which mpasses in the next middleware
    }
}
export {asyncHandler};