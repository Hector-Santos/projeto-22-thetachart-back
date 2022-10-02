import { Request, Response } from "express";
import {TBarChartInputData} from "../types/barChartsTypes";
import { createBarChartService, findBarChartByIdService } from "../services/barChartsService";
import { ObjectId } from "mongodb";



export async function createBarchart(req:Request, res:Response) {
  const barChartData:TBarChartInputData = req.body;
  const userId:ObjectId = res.locals.id;
  const insertData = await createBarChartService(barChartData, userId);   
  res.status(201).send(insertData.insertedId);
}

export async function findBarChartById(req:Request, res:Response) {
  const barChartId:ObjectId = new ObjectId(req.params.id);
  const userId:ObjectId = res.locals.id;
  const barChart = await findBarChartByIdService(barChartId, userId);
  res.status(200).send(barChart);
}
