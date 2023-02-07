import { Router } from "express";
import { validateInput } from "../middleware/validateInput";

const createRouter = Router();

createRouter.post("/add",validateInput)