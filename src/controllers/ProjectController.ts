import type { Request, Response } from "express";

export class ProjectController {
  static getAllProjects = async (req: Request, res: Response) => {
    res.send("Todos los proyectos");
  };
}

/**
 * Este archivo se nombra como una clase -- class, las clases por convencion se nombran con PascalCase.
 *
 * Tener una clase y metodos estaticos permite una sola importacion de la clase y luego a traves de los metodos acceder a todos los handlers. Ademas no necesita instanciar la clase para acceder a los metodos. Agrupa mejor. A diferencia del proyecto anterior que se importaba cada handler por separado, acá se tiene todo agrupado por los metodos y se accede con .metodo
 *
 * Importamos el type de req / res para tener los Types de TS.
 *
 *
 *
 *
 *
 *
 */
