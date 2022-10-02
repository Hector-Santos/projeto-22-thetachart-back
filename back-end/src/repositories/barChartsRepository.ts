import { ObjectId } from "mongodb";
import  {db}  from "../database/db";
import {TBarChartCreateData} from "../types/barChartsTypes";


export async function insert(barChartData: TBarChartCreateData) {
  const insetData = await db.collection("barcharts").insertOne({
    userId: barChartData.userId, 
    type: barChartData.type, 
    title: barChartData.title , 
    columnNumber: barChartData.columnNumber, 
    columnNames: barChartData.columnNames, 
    columnColors: barChartData.columnColors, 
    columnValues: barChartData.columnValues 
  });

  return insetData;
}


export async function findById(id:ObjectId) {
  const barchart = await db.collection("barcharts").findOne({
    _id :id
  }
  );
  return barchart; 
}

export async function findByUserId(userId:ObjectId) {
  const barcharts = await db.collection("barcharts").find({
    userId: userId
  }
  ).toArray();
  return barcharts;
}