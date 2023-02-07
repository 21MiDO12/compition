import { Request,Response,NextFunction } from "express-serve-static-core";

const validateInput = (req:Request,res:Response,next:NextFunction) =>
{
    res.send("Validating input");
    next();
}

export {validateInput}