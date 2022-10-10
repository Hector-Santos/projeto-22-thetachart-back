import { Request, Response } from "express";
import {TBarChartInputData} from "../types/barChartsTypes";
import { createBarChartService,
  findBarChartByIdService, 
  findBarChartsByUserIdService,
  createRandomBarChartService } from "../services/barChartsService";
import { ObjectId } from "mongodb";



export async function createBarChart(req:Request, res:Response) {
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

export async function findBarChartsByUserId(req:Request, res:Response) {
  const userId:ObjectId = res.locals.id;
  const barChart = await findBarChartsByUserIdService(userId);
  res.status(200).send(barChart);
}

export async function createRandomBarChart(req:Request, res:Response) {
  const barChart = await createRandomBarChartService();
  res.status(200).send(barChart);
}
