import { ObjectId } from "mongodb";

export interface IBarChartData{
id: ObjectId
userId:ObjectId
title: string
columnNumber: number
columnNames: Array<string>
columnColors:Array<string>
columnValues:Array<number>
}

export type TBarChartCreateData = Omit<IBarChartData, "id">
export type TBarChartInputData = Omit<IBarChartData, "id" | "userId">
