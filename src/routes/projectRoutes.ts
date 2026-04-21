import { Router } from "express";
import { ProjectController } from "../controllers/ProjectController";

//Instaciamos Router de express
const router = Router();

//Obtener todos los proyectos
router.get("/", ProjectController.getAllProjects);

//Crear un Proyecto
router.post("/", ProjectController.createProject);
export default router;

/**
 * El router de express es la capa para las peticiones HTTP. Cada peticion lleva un path '/' y un handler (el metodo del controller) es un cotrolador por app???
 * 
                 No exactamente. La separación es así:
                Un Router      → por recurso (projects, users, tasks)
                Un Controller  → por recurso también
                Un método      → por operación (getAllProjects, createProject, etc.)
                Entonces en tu proyecto va a haber:

                projectRoutes.ts + ProjectController para proyectos
                userRoutes.ts + UserController para usuarios
                etc.
 * 
 * 
 * 
 * Al usar clases para el controler podemos hacer una sola importacion y como los metodos son staticos acceder a ellos sin importar cada funcion o handler como se hizo en el proyecto anterior. este import es mas conciso:
 *
 *                  import { ProjectController } from "../controllers/ProjectController";
 *
 *
 *
 * Hasta este punto el flujo venia desde index.ts porque esta el script del package.json -> index importa server -> se ejecuta todo el codigo en server (conecta la DB) -> luego de que ejecuto todo el codigo de server (el import) vuelve a index y sigue ahi.
 *
 * Incorporamos entonces en server al ROUTER
 * 
 *  export default algo  →  se importa SIN llaves  →  cualquier nombre
    export const algo    →  se importa CON llaves  →  debe ser el mismo nombre

   Aca van las rutas especificas de los proyectos, se ve la separacion de responsabilidad.. en el server esta la ruta api/projects y aca estan cada accion de esa ruta.
 *
 */
