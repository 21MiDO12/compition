import { Router } from "express";
import { idValidator } from "../middleware/validateID";

const showRouter = Router();

showRouter.get("/show",idValidator);

export {showRouter}