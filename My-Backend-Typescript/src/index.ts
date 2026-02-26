import express , { Express , Request , Response } from "express"
import {config} from "dotenv"
import cors from "cors"
import { dbConnection } from "./utils/db"
import bookRouter from "./routes/bookRoute"
import routes from "./routes"

const app : Express= express()


app.get("/",(req:Request,res:Response) =>{
    res.send("Hello")
})

// we are telling app that we are selling the json data.

app.use(express.json())

app.use("/api",routes)


config()
const port = process.env.PORT || 3000 


// dbConnection()

// middlewares 
app.use(cors({
    origin:process.env.HOST_URL || "*"
}))

app.listen(port , () =>{
    console.log("Port Running ")
} )
