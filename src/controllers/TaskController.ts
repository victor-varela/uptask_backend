import type { Request, Response } from "express";

//Creamos la clase porque es mas facil a la hora de importaciones llamar a los metodos de una clase, son menos importaciones.

export class TaskController {
  static createTask = (req: Request, res: Response) => {
    const { projectId } = req.params;
    console.log(projectId);

    try {
    } catch (error) {
      console.log(error);
    }
  };
}
