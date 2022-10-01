import express from "express";
//import { signIn, signUp } from "../controllers/barChartController";
import { validate } from "../middlewares/validationMiddleware";
import { barChartSchema } from "../schemas/barChartSchema";

const barChartRouter = express.Router();
barChartRouter.post("/barchart", (req, res, next) => validate(req, res, next, barChartSchema), () => console.log("ok"));


export default barChartRouter;