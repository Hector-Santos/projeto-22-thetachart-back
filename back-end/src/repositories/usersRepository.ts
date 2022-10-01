import  {db}  from "../database/db";
import {LogUserData} from "../types/usersTypes";


export async function insert(userData: LogUserData) {
  const user = await db.collection("users").insertOne({
    email:userData.email,
    password:userData.password
  });
  return user;
}


export async function findByEmail(email:string) {
  const user = await db.collection("users").findOne({
    email
  }
  );
  return user;
}

export async function findById(id:number) {
  const user = await db.collection("users").findOne({
    id
  }
  );
  return user;
}

