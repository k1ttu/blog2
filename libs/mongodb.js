import mongoose from "mongoose";

const connectMongoDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGOURI,
            {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Connected to MongoDB")
    }catch(error){
        console.log(error);
    }
};

export default connectMongoDB;