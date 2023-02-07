import { Router } from "express";

const getRouter = Router();

getRouter.get("/getAll",(req,res) => {res.send("Get All Data")})

export {getRouter}