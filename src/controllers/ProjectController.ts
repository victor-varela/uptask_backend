import type { Request, Response } from "express";
import Project from "../models/Project";

export class ProjectController {
  static getAllProjects = async (req: Request, res: Response) => {
    res.send("Todos los proyectos");
  };

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
 *
 *
 *
 */
