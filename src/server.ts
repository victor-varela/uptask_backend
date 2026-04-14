import express from "express";
import { connectDB } from "./config/db";
import dotenv from 'dotenv'

dotenv.config()

connectDB()

const app = express();

export default app;

/**
 * Express es lo que crea el servidor hace mas facil el manejo de verbos http
 */
