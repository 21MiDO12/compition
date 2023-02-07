import { Router } from "express";

const deleteRouter = Router();

deleteRouter.delete("/delete",(req,res) => {res.send(`Deleting ${req.query.id}`)})

export {deleteRouter}