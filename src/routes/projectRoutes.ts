import { Router } from "express";
import { body } from "express-validator";
import { ProjectController } from "../controllers/ProjectController";

//Instaciamos Router de express
const router = Router();

//Obtener todos los proyectos
router.get(
  "/",
  //validamos express-validator [body(nombre del campo igual al esquema/modelo)]
  body("projectName").notEmpty().withMessage("El nombre del proyecto es obligatorio"),
  body("clientName").notEmpty().withMessage("El nombre del cliente es obligatorio"),
  body("description").notEmpty().withMessage("La descripcion del proyecto es obligatoria"),
  ProjectController.getAllProjects,
);

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

   Usamos en este router a express validator. Validator tiene una funcion 'body' [  import {body} from 'express-validator' ] esta se le envia el nombre del campo que queremos validar y luego le anidamos otras funciones de validator como .notEmpty() .whitMessage() - eso es lo que hace validator. Este codigo lo escribimos aca en el router para no contaminar al controller y tener las responsabilidades separadas. OJO que tenemos un middleware handlerInputErrors que va ANTES del controller. Este middelware tiene la funcion next que permite que el codigo siga el flujo hacia el controller una vez que paso la validacion O si hubo un error entonces DETIENE EL FLUJO, de ahi su utilidad. Si no tenemos la funcion que maneja los posibles errores NO VALE DE NADA la validacion que hicimos.

   SI lees el codigo actual se ve que primero esta la validacion y luego se escribio la funcion del controller. Esto no fue asi. Primero escrbi la funcion del controller que es la que llama a cada metodo estatico (create, getAll, etc..) y despues le agregue la validacion.
 *
 */
