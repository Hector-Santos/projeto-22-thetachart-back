import { Request, Response } from 'express';
import { LogUserData, CreateUserData } from '../types/usersTypes';
import {login} from '../services/authService';
import { createUser } from '../services/usersService';



export async function signUp(req:Request, res:Response) {
  const user:CreateUserData = req.body;
  await createUser(user)      
  res.sendStatus(201);
}

export async function signIn(req:Request, res:Response) {
  const user:LogUserData = req.body;
  const token = await login(user)
  res.send(token).status(200);
}

