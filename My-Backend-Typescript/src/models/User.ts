import mongoose, { Schema , StringSchemaDefinition, model} from "mongoose"
interface IUser {
    username:string,
    password:string,
    books?:[],
    role:string
}

const userSchema = new Schema<IUser>({
    username :{
        required : true,
        type:String,
        trim:true,
    },
    password :{
        required : true,
        type:String,
        trim:true,
    },
    role :{
        required : true,
        type:String,
        trim:true,
        enum:["creator" , "visitor" , "admin"]
    },

    books:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Book" // taken reference from Book.ts schema
        }
    ]



})

const User = model<IUser>("User" , userSchema); 

export {User , IUser} 