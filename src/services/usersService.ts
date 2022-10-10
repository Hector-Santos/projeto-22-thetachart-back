import { findByEmail, insert } from "../repositories/usersRepository";
import { TCreateUserData, TLogUserData} from "../types/usersTypes";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

export async function createUser(userData: TCreateUserData){

  if(userData.password !== userData.confirmPassword)
    throw {type: "bad_request", message: "the passowords must match"};

  const emailExists = await findByEmail(userData.email);
  if(emailExists) throw {type: "conflict", message: "the provided email is invalid"};

  const passwordHash = bcrypt.hashSync(userData.password, 10);

  const encryptedUserData:TLogUserData = {email:userData.email, password:passwordHash};
  await insert(encryptedUserData);
}

