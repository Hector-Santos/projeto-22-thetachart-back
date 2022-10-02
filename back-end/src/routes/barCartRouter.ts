import express from "express";
import { createBarchart, findBarChartById } from "../controllers/barChartsController";
import { verifyToken } from "../middlewares/authMiddleware";
import { validate } from "../middlewares/validationMiddleware";
import { barChartSchema } from "../schemas/barChartsSchema";

const barChartRouter = express.Router();
barChartRouter.post("/barchart/create", verifyToken, (req, res, next) => validate(req, res, next, barChartSchema), createBarchart);
barChartRouter.get("/barchart/find/:id", verifyToken, findBarChartById);


export default barChartRouter;