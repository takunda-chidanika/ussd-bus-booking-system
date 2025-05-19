import e, { Request, Response, Router } from "express";
import { APPLICATION_API_VERSION } from "../config/env";

const router = Router();

// HEALTH CHECK
router.get("/", (req:Request, res:Response) => {res.redirect(`/api/${APPLICATION_API_VERSION}/health-check`)});
router.get(`/api/${APPLICATION_API_VERSION}/health-check`, (req:Request, res:Response) => {
    res.status(200).json({
        status: "success",
        message: "API is running",
    });
});



export default router;