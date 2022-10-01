import { ObjectId } from "mongodb";


export interface UserData {
    id:ObjectId
    email:string
    password:string
}
export type LogUserData = Omit<UserData, "id" | "confirmPassword">

export type CreateUserData = Omit<UserData, "id"> & {confirmPassword: string }
