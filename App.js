import express from "express";
import cors from "cors";
import mongoose from "mongose";
import { Gato } from "./Backend/Controller/AppControl.js";

dotenv.config()
mongoose.connect(process.env.urI)
then(()=>{
    console.log("si funciona")
})
.catch((error)=>{
    console.log("no funciona", error)
})
const app = express()
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se escucha")
})
