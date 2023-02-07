import { Request,Response,NextFunction } from "express-serve-static-core"; 

const idValidator = (req:Request,res:Response,next:NextFunction) =>
{
    res.send(`get data of ${req.query.id}`);

    next();
}

export {idValidator}