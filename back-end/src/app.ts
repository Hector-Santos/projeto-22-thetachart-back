import dotenv from "dotenv";
import express, { json } from "express";
import "express-async-errors";
import errorHandler from "./middlewares/errorHandlerMiddleware";
import router from "./routes/index";

dotenv.config();

const app = express();
app.use(json());
app.use(router);
app.use(errorHandler);

export default app;
