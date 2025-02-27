import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import MainRouter from './Routes/IndexRoute.js';
import bodyParser from 'body-parser';
dotenv.config();
const port=process.env.PORT||3000
const db_user=process.env.DB_USER;
const db_name=process.env.DB_NAME;
const db_pass=process.env.DB_PASS;
const app=express();

// app.get('/getresult',(req,res)=>{
//     res.send("this is my first project of node js")
// })

// const PORT=5000;
// app.listen(PORT,()=>{
//     console.log(   `the app is running on the port ${PORT}`);
// });
app.use(bodyParser.json());
app.use(express.json());
app.use('/',MainRouter);
const  dbUri=`mongodb+srv://christineumurerwa5:WqoQZjYqti0GC6bh@cluster0.uqqgv.mongodb.net/ `;
mongoose.set("strictQuery", false);
mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 50000,  // Increase timeout
  socketTimeoutMS: 45000,          // Increase socket timeout
  connectTimeoutMS: 50000
})
.then(() => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Node API is running on port http://localhost:${port}`);
  });
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
});
