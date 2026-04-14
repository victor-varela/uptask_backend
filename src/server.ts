import express from "express";
import { connectDB } from "./config/db";
import dotenv from 'dotenv'

dotenv.config()

connectDB()

const app = express();

export default app;

/**
 * Express es lo que crea el servidor hace mas facil el manejo de verbos http
 * Cuando importamos server en index se ejecuta todo el codigo de este archivo en index.
 * 
 * El flujo completo cuando arranca la APP:
 * 
            npm run dev
                ↓
            index.ts se ejecuta
                ↓
            encuentra el import de server
                ↓
            ejecuta server.ts de arriba a abajo:
                → dotenv.config()   (carga el .env)
                → connectDB()       (conecta MongoDB)
                → const app = express()
                ↓
            vuelve a index.ts
                ↓
            server.listen()  (arranca el servidor)
 */
