/* eslint-disable @typescript-eslint/no-explicit-any */
import supertest from "supertest";
import app from "../src/app";
import {signInFactory, signUpFactory} from "./factories/authFactory";
import { db, mongoClient, connectToDatabase } from "../src/database/mongodb";


beforeAll(async () => {
  await connectToDatabase();

});

beforeEach(async () => {
  await db.users.deleteMany({});
  await db.barCharts.deleteMany({});
});

afterAll(async () => {
  await  mongoClient.close();
});

describe("Tests POST /signup ", () => {
  it("Must return 201, if a user is registered in the correct format", async () => {
    const user = await signUpFactory();

    const result = await supertest(app).post("/signup").send(user);

    expect(result.status).toBe(201);
  });

  it("Must return 409, when trying to register a user that already exists", async () => {
    const user = await signUpFactory();

    await supertest(app).post("/signup").send(user);
    const result = await supertest(app).post("/signup").send(user);

    expect(result.status).toBe(409);
    
  });

  it("Must return 400, when trying to register a user with a password confirmation different from the password", async () => {
    const user = await signUpFactory();

    user.confirmPassword += "a";
     
    const result = await supertest(app).post("/signup").send(user);

    expect(result.status).toBe(400);
  });
});

describe("Tests POST /signIn ", () => {
  it("Must return 200, if email and password are valid", async () => {
    const user = await signUpFactory();

    const logUser = {
      email:user.email,
      password:user.password
    };

    await supertest(app).post("/signup").send(user);

    const result = await supertest(app).post("/signIn").send(logUser);

    expect(result.status).toBe(200);
    
  });

  it("Must return 401 when trying to log in a user with incorrect email or password", async () => {
    const user = await signInFactory();
     
    const result = await supertest(app).post("/signin").send(user);

    expect(result.status).toBe(401);
  });
});

