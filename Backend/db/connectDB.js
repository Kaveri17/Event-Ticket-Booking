import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB is Connected: ${conn.connection.host}`)

    }
    catch(err){
        console.log("Error in connection to MongoDB:",err.message)
        process.exit(1) // 1 = failure, 0 = success (status code)

    }
}