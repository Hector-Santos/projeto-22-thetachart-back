import { db } from "../database/mongodb";
import {TLogUserData} from "../types/usersTypes";


export async function insert(userData: TLogUserData) {
  return await db.users.insertOne({
    email:userData.email,
    password:userData.password
  });

}


export async function findByEmail(email:string) {
  return await db.users.findOne({
    email
  }
  );

}

export async function findById(id:number) {
  return await db.users.findOne({
    id
  }
  );

}

