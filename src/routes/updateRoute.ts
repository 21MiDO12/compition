import { Router } from "express";
import { idValidator } from "../middleware/validateID";
import { validateInput } from "../middleware/validateInput";

const updateRouter = Router();

updateRouter.put("/update",idValidator,validateInput);

export {updateRouter}