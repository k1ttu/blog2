import mongoose from "mongoose";

export const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGOURI);
    }catch(err){
        console.log("Failed to connect to mongodb: " , err)
    }
}