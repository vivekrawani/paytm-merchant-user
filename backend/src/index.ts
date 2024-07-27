import express from "express";
import dotenv from "dotenv";
import userRouter from "./router/user";
import merchantRouter from "./router/merchant";
const  app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;
app.use("/api/v1/user", userRouter);
app.use("/api/v1/merchant", merchantRouter);

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})