import { ObjectId } from "mongodb";


export interface IUserData {
    id:ObjectId
    email:string
    password:string
}
export type TLogUserData = Omit<IUserData, "id" | "confirmPassword">

export type TCreateUserData = Omit<IUserData, "id"> & {confirmPassword: string }
