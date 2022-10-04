import { ObjectId } from "mongodb";
import { db } from "../database/mongodb";
import {IBarChartData, TBarChartCreateData} from "../types/barChartsTypes";


export async function insert(barChartData: TBarChartCreateData) {
  return await db.barCharts.insertOne({
    userId: barChartData.userId,  
    title: barChartData.title , 
    columnNumber: barChartData.columnNumber, 
    columnNames: barChartData.columnNames, 
    columnColors: barChartData.columnColors, 
    columnValues: barChartData.columnValues 
  });

}


export async function findById(id:ObjectId) {
  return await db.barCharts.findOne({
    _id :id
  }
  );
  
}

export async function findByUserId(userId:ObjectId) {
  return await db.barCharts.find({
    userId: userId
  }
  ).toArray();
}