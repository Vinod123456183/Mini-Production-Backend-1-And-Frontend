import mongoose from "mongoose";

export const dbConnection: () => Promise<void> = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("DB Conneceted")
    } catch (error :any) {
        console.log("Error Connecting DB " , error.message)
        process.exit(1);
    }
}