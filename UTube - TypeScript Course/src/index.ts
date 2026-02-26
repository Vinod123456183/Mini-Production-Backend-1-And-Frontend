
import express, { Express, Request, Response } from "express"
import { config } from "dotenv"
import cors from "cors"
import { connectDb } from "./utils/db"
import bookRouter from "./routes/bookRoute"
import routes from "./routes"

const app: Express = express()

config()
const port = process.env.PORT || 8080

// DB CONNECTION
connectDb()

// MIDDLEWARES
app.use(cors({
    origin: process.env.HOST_URL || "*"
}))
app.use(express.json())

// app.use("/api/books", bookRouter)
app.use("/api", routes)

// BASIC ENDPOINT
app.get("/", (req: Request, res: Response) => {
    res.json({ success: true, message: "Hello world" })
})

app.listen(port, () => console.log(`Server running on port ${port}`))


// STATUS CODES
// 1XX : INFORMATIONAL
// 2XX : SUCCESS
// 3XX : REDIRECTIONAL
// 4XX : CLIENT SIDE
// 5XX : SERVER SIDE