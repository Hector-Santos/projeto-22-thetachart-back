import express from "express";
import { createBarChart, createRandomBarChart, findBarChartById, findBarChartsByUserId } from "../controllers/barChartsController";
import { verifyToken } from "../middlewares/authMiddleware";
import { validate } from "../middlewares/validationMiddleware";
import { barChartSchema } from "../schemas/barChartsSchema";

const barChartRouter = express.Router();
barChartRouter.post("/barchart/create", verifyToken, (req, res, next) => validate(req, res, next, barChartSchema), createBarChart);
barChartRouter.get("/barchart/find/:id", verifyToken, findBarChartById);
barChartRouter.get("/barchart/find", verifyToken, findBarChartsByUserId);
barChartRouter.get("/barchart/random", verifyToken, createRandomBarChart);


export default barChartRouter;