import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import router from './Routes/IndexRoute.js';
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

app.use(express.json());
app.use('/api',router);
const  dbUri=`mongodb+srv://${db_user}:${db_pass}@cluster0.uqqgv.mongodb.net/botiga`;
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
