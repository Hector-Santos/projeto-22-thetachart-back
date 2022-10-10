import { NextFunction, Request, Response } from "express";


export default async function errorHandler(error:{type: string, message: string}, req:Request, res:Response, next:NextFunction) {
  console.log(error);
  if (error.type === "not_found") return res.status(404).send(error.message);
  if (error.type === "conflict") return res.status(409).send(error.message);
  if (error.type === "unauthorized") return res.status(401).send(error.message);
  if (error.type === "bad_request") return res.status(400).send(error.message);

  
  return res.sendStatus(500);
}