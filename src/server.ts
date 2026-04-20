import express from "express";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import { ProjectController } from "./controllers/ProjectController";

dotenv.config();

connectDB();

const app = express();

//Routes
app.use("/api/projects", ProjectController.getAllProjects);

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



 Luego que arranca el servidor INCORPORAMOS AL ROUTER.

 "Postman hace una petición HTTP → Express la recibe → busca la ruta que coincide → ejecuta el controlador correspondiente"

Cuando Postman hace una petición, la URL completa es:
GET http://localhost:4000/api/projects

Express la procesa en dos pasos:

Paso 1 — server.ts filtra por prefijo
typescriptapp.use("/api/projects", projectRoutes)

Express ve la petición y piensa: "la URL empieza con /api/projects — le paso el control a projectRoutes". Le entrega la petición al router.

Paso 2 — el Router maneja lo que queda
Cuando Express le pasa la petición al router, ya le "cortó" el /api/projects del principio. El router solo ve lo que queda:

URL original:        /api/projects
Lo que ve el router: /
Entonces router.get("/") coincide perfectamente.


Con un ejemplo más claro:

URL: /api/projects/123

server.ts corta /api/projects  →  el router recibe /123
router.get("/:id")             →  coincide con /123


La analogía
Pensalo como una empresa con departamentos:
Recepción (server.ts)     → "¿tu consulta es sobre proyectos? pasá al depto de proyectos"
Depto proyectos (router)  → "¿querés todos? router.get('/')   
                             ¿uno específico? router.get('/:id')"

Si esto no fuese asi seria un caos de todas las peticiones juntas:

app.get("/api/projects", ProjectController.getAllProjects)
app.post("/api/projects", ProjectController.createProject)
app.get("/api/projects/:id", ProjectController.getProjectById)
app.put("/api/projects/:id", ProjectController.updateProject)
app.delete("/api/projects/:id", ProjectController.deleteProject)

app.get("/api/users", UserController.getAllUsers)
app.post("/api/users", UserController.createUser)
app.get("/api/users/:id", UserController.getUserById)
app.put("/api/users/:id", UserController.updateUser)
app.delete("/api/users/:id", UserController.deleteUser)

app.get("/api/tasks", TaskController.getAllTasks)
// ... y así infinitamente


Se trata de separacion de responsabilidades:

index.ts         → responsabilidad: arrancar el servidor
server.ts        → responsabilidad: configurar la app
projectRoutes.ts → responsabilidad: definir las rutas de proyectos
ProjectController→ responsabilidad: manejar la lógica de cada operación
Project.ts       → responsabilidad: definir la estructura de datos
db.ts            → responsabilidad: conectar la base de datos




 */
