import type { Request, Response } from "express";
import Project from "../models/Project";

//Creamos la clase - y dentro sus metodos
export class ProjectController {
  //obtener todos los proyectos
  static getAllProjects = async (req: Request, res: Response) => {
    try {
      const projects = await Project.find({}); //tiene un objeto (  {}  ) porque se van a agregar params para buscar proyectos mas adelante
      res.json(projects);
    } catch (error) {
      console.log(error);
    }
  };

  //Obtener un proyecto por ID
  static getProjectById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const project = await Project.findById(id);
      //chequear id 'malicioso o parecido a un id de mongo pero invalido ej:69e8e54b27fab011dfcdc1310 borre el ultimo digito y coloque un 0. Si no se valida tira null--> ahi RETORNAMOS == return para no romper la app '
      if (!project) {
        const error = new Error("Proyecto no encontrado");
        return res.status(404).json({ error: error.message });
      }
      res.json(project);
    } catch (error) {
      console.log(error);
    }
  };

  //Actualizar un proyect
  static updateProject = async (req: Request, res: Response) => {
    //Similar a getProjectById (requerimos leer el id)
    const { id } = req.params;
    try {
      //primero econtramos y actualizamos despues guardamos
      const project = await Project.findByIdAndUpdate(id, req.body);
      //Si no hay proyecto RETORNAMOS
      if (!project) {
        const error = new Error("Proyecto no encontrado");
        return res.status(404).send({ error: error.message });
      }
      //ya encontramos y actuliazamos ahora GUARDAMOS project
      await project.save();
      res.send("Proyecto Actualizado");
    } catch (error) {
      console.log(error);
    }
  };

  //crear un proyecto
  static createProject = async (req: Request, res: Response) => {
    //Primero lo instanciamos
    const project = new Project(req.body);
    // console.log(req.body);

    try {
      //Despues lo guardamos
      await project.save();
      res.send("Proyecto creado correctamente...");
    } catch (error) {
      console.log(error);
    }
  };
}

/**
 * Este archivo se nombra como una clase -- class, las clases por convencion se nombran con PascalCase.
 *
 * Tener una clase y metodos estaticos permite una sola importacion de la clase y luego a traves de los metodos acceder a todos los handlers. Ademas no necesita instanciar la clase para acceder a los metodos. Agrupa mejor. A diferencia del proyecto anterior que se importaba cada handler por separado, acá se tiene todo agrupado por los metodos y se accede con .metodo
 *
 * Importamos el type de req / res para tener los Types de TS.
 *
 * Para crear un registro se puede usar model.save(....) o model.create(....). Usamos una instancia del modelo, en este caso project =  nwe Project (este es el modelo, en mayuscula) y luego project.save(----) porque podemos despues agregar datos que no vengan del body y mas validaciones. EL objeto request es muy importante, fijate que en postman aparace body, headers, etc.. eso va en request. es un monton de data que tiene request!!!!
 *
 *  Vas a la DB, try catch
 *
 *  Aca entra en accion Mongoose, es quien traduce el objeto a sql a traves de usar el modelo Project y sus metodos, create, save, etc
 *
 *  FLUJO DE UN ENDPOINT:
 * 
 *         Recibir → Procesar → Devolver es el patrón universal de cualquier servidor.
 *          static createProject = async (req: Request, res: Response) => {
                      // 1. LLEGA — leés del req
                      const project = new Project(req.body);

                      // 2. PROCESÁS — operación en la DB
                      await project.save();

                      // 3. DEVOLVÉS — escribís en res
                      res.json({ message: "Proyecto creado correctamente" });
                    };
 *
 */
