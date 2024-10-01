import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/connectDb.js"
import cookieParser from "cookie-parser"

// importing auth.route.js file 
import userRoutes from "./routes/user.route.js"
import cors from 'cors'

dotenv.config()

const app =express()
const PORT = process.env.PORT || 5000



//middleware that allows us to parse incoming request :re.body  
app.use(express.json()) 
// allows us to parse the incoming cookies
app.use(cookieParser())
app.use(cors({ origin: 'http://localhost:5173' }));
// api routes being used from auth.route.js 
app.use("/api/user",userRoutes)

app.listen(PORT, ()=>{
    connectDB();
    console.log("Server is running on port :",PORT )
})

// app.get('/api/events', (req, res) => {
//     // Example: Fetch events from database
//     const events = [{ id: 1, name: 'Conference' }, { id: 2, name: 'Workshop' }];
//     res.json(events);
//   });
