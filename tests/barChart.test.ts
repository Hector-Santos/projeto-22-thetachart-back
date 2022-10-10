/* eslint-disable @typescript-eslint/no-explicit-any */
import supertest from "supertest";
import app from "../src/app";
import { barChartFactory} from "./factories/barChartFactory";
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

describe("Tests POST /barchart/create ", () => {
  it("Must return 201, if a barChart is registered in the correct format", async () => {
    
    const user = await signUpFactory();
    
    const logUser = {
      email:user.email,
      password:user.password
    };

    await supertest(app).post("/signup").send(user);

    const {text:token} = await supertest(app).post("/signin").send(logUser);

    const barChart = await barChartFactory();
   

    const result = await supertest(app).post("/barchart/create").send(barChart).set({ Authorization: token });

    expect(result.status).toBe(201);
  });

  it("Must return 422, when trying to register a barChart with incorrect fields", async () => {
    const barChart = {};

    const user = await signUpFactory();
    
    const logUser = {
      email:user.email,
      password:user.password
    };
    

    await supertest(app).post("/signup").send(user);

    const {text:token} = await supertest(app).post("/signin").send(logUser);

    const result = await supertest(app).post("/barchart/create").send(barChart).set({ Authorization: token });

    expect(result.status).toBe(422);
  });
});

describe("Tests GET /barcharts/find/:id ", () => {
  it("Must return 200, and a bar chart that corresponds to the provided id ", async () => {
    const user = await signUpFactory();
    
    const logUser = {
      email:user.email,
      password:user.password
    };
    

    await supertest(app).post("/signup").send(user);

    const {text:token} = await supertest(app).post("/signin").send(logUser);

    const barChart = await barChartFactory();

    const {body:id} = await supertest(app).post("/barchart/create").send(barChart).set({ Authorization: token });
    

    // eslint-disable-next-line quotes
    const result = await supertest(app).get(`/barchart/find/${id}`).set({ Authorization: token });
    
    expect(result.status).toBe(200);
    
  });

  it("Must return 401 if the required barchart belongs to another user", async () => {
    const barChart = await barChartFactory();
  
    const user1 = await signUpFactory();

    const logUser1 = {
      email:user1.email,
      password:user1.password
    };
  
  
    await supertest(app).post("/signup").send(user1);
  
    const {text:token1} = await supertest(app).post("/signin").send(logUser1);

    const {body:id} = await supertest(app).post("/barchart/create").send(barChart).set({ Authorization: token1 });
  
    const user2 = await signUpFactory();

    const logUser2 = {
      email:user2.email,
      password:user2.password
    };
  
    await supertest(app).post("/signup").send(user2);
  
    const {text:token2} = await supertest(app).post("/signin").send(logUser2);
  
    const result = await supertest(app).get(`/barchart/find/${id}`).set({ Authorization: token2 });
  
    expect(result.status).toBe(401);
  });
});

describe("Tests GET /barchart/find", () => {
  it("Must return 201, if a barChart is registered in the correct format", async () => {
    
    const user = await signUpFactory();
    
    const logUser = {
      email:user.email,
      password:user.password
    };

    await supertest(app).post("/signup").send(user);

    const {text:token} = await supertest(app).post("/signin").send(logUser);

    const barChart = await barChartFactory();
    await supertest(app).post("/barchart/create").send(barChart).set({ Authorization: token });

    const result = await supertest(app).get("/barchart/find/").set({ Authorization: token });

    expect(result.status).toBe(200);
  });
});