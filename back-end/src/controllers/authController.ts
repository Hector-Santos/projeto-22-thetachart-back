import { Request, Response } from 'express';
import { TLogUserData, TCreateUserData } from '../types/usersTypes';
import {login} from '../services/authService';
import { createUser } from '../services/usersService';



export async function signUp(req:Request, res:Response) {
  const user:TCreateUserData = req.body;
  await createUser(user)      
  res.sendStatus(201);
}

export async function signIn(req:Request, res:Response) {
  const user:TLogUserData = req.body;
  const token = await login(user)
  res.send(token).status(200);
}

