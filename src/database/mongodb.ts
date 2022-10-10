import { MongoClient, Collection, Db } from "mongodb";
import dotenv from "dotenv";

export let db: { users: Collection; barCharts: Collection };

export let mongoClient: MongoClient;

export async function connectToDatabase() {
  dotenv.config();

  mongoClient = new MongoClient(process.env.MONGO_URI);

  await mongoClient.connect();

  const database: Db = mongoClient.db(process.env.DATABASE);

  const usersCollection: Collection = database.collection("users");

  const barChartsCollection: Collection = database.collection("barcharts");

  db = {
    users: usersCollection,
    barCharts: barChartsCollection
  };
}

