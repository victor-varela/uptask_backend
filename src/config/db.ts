import mongoose from "mongoose";
import colors from "colors";
import { exit } from "node:process";

export const connectDB = async () => {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL no está definida en el .env");
    }
    const { connection } = await mongoose.connect(process.env.DATABASE_URL);
    const url = `${connection.host}:${connection.port}`;
    console.log(colors.magenta.bold(`MongoDB connected at ${url}`));
  } catch (error) {
    console.log(error.message);
    exit(1);
  }
};

/**
 * Aca configuro la conexion pero llamo a esta funcion en server.ts
 * 
 * 
 * 
 * 
 */
