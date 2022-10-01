import { ObjectId } from "mongodb";

export interface BarChartData{
id: ObjectId
userId:ObjectId
type: string
title: string
columnNumber: number
columnNames: Array<string>
columnColors:Array<string>
columnValues:Array<number>
}

export type CreateBarChartData = Omit<BarChartData, "id">
