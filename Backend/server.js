import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { model } from "mongoose";
import mongoose from "mongoose";
import chatRoute from "./routes/Chat.js";


const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use('/api', chatRoute);
 
const connectToDb= async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('connected to db');
    }catch(err){
        // console.log(err);
        console.log('Failed to connect DB');
    }
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectToDb();
});

// app.post("/test", async (req, res) => {
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
//     },
//     body: JSON.stringify({
//       model: "openai/gpt-4o-mini",
//       messages: [
//         {
//           role: "user",
//           content: req.body.message,
//         },
//       ],
//     }),
//   };

//   try {
//     const response = await fetch("https://openrouter.ai/api/v1/chat/completions", options);
//     const data  = await response.json();
//     console.log(data.choices[0].message.content);
//     res.send(data.choices[0].message.content);
    
//   } catch (err) {
//     console.log(err);
//   }
// });
