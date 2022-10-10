import { TBarChartCreateData, TBarChartInputData } from "../types/barChartsTypes";
import { insert, findById, findByUserId } from "../repositories/barChartsRepository";
import { ObjectId } from "mongodb";
import { barChartFactoryPreset } from "../../tests/factories/barChartFactory";
import { faker } from "@faker-js/faker";




export async function createBarChartService(barChartInputData: TBarChartInputData, userId:ObjectId){
  
  const barChartCreateData:TBarChartCreateData = {
    userId: userId,
    title: barChartInputData.title , 
    columnNumber: barChartInputData.columnNumber, 
    columnNames: barChartInputData.columnNames, 
    columnColors: barChartInputData.columnColors, 
    columnValues: barChartInputData.columnValues 
  };

  const insetData = await insert(barChartCreateData);

  return insetData;
}

export async function findBarChartByIdService(barChartId:ObjectId, userId:ObjectId){
  
  const barChart = await findById(barChartId);
  if(!barChart)
    throw {type: "not_found",
      message: "a bar chart with the provided id could not be found"};

  if(userId !== barChart.userId)
    throw {type: "unauthorized",
      message: "the bar chart you are trying to acsses belongs to another user"};

  return barChart;
}

export async function findBarChartsByUserIdService(userId:ObjectId){
  
  const barCharts = await findByUserId(userId);
  if(!barCharts)
    throw {type: "not_found",
      message: "bar charts associated with the provided id could not be found"};

  return barCharts;
}
  
export async function createRandomBarChartService(){
   
  const barChart = barChartFactoryPreset(faker.datatype.number({min:3, max:6}));

  return barChart;
}
 