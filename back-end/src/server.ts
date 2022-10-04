import dotenv from "dotenv";
import app from "./app";
import { connectToDatabase } from "../src/database/mongodb";

dotenv.config();

connectToDatabase();

const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});