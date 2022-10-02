import { IBarChartData, TBarChartCreateData, TBarChartInputData } from "../types/barChartsTypes";
import { insert, findById } from "../repositories/barChartsRepository";
import { ObjectId } from "mongodb";




export async function createBarChartService(barChartInputData: TBarChartInputData, userId:ObjectId){
  
  const barChartCreateData:TBarChartCreateData = {
    userId: userId, 
    type: barChartInputData.type, 
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
  
  const barChart:IBarChartData = await findById(barChartId);
  if(!barChart)
    throw {type: "not_found",
      message: "a bar chart with the provided id could not be found"};

  if(userId !== barChart.userId)
    throw {type: "not_found",
      message: "the bar chart you are trying to acsses belongs to another user"};

  return barChart;
}
  
  
 