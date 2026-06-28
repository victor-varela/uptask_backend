import type { Request, Response } from "express";
import Task from "../models/Task";

//Creamos la clase porque es mas facil a la hora de importaciones llamar a los metodos de una clase, son menos importaciones.

export class TaskController {
  static createTask = async (req: Request, res: Response) => {
    try {
      //1- Agregar la tarea
      const task = new Task(req.body);

      //2- Asociar la tarea al proyecto (lo que agregamos en el middleware| el conjuro. Req ahora tiene la property project y accedemos al id)
      task.project = req.project._id;
      //5- Guardar la tarea en la DB
      //  await task.save();

      // 3- Agregar la tarea al array de tareas del proyecto-NOMRMALIZACION- una sola referencia a task (id) para luego en la DB tener la data actualizada siempre
      req.project.tasks.push(task._id);

      //4- Guardar el proyecto con su tarea en la DB
      //  await req.project.save();

      //Hacer un solo await para guardar en la DB. Son varias promises por eso es un array
      await Promise.allSettled([task.save(), req.project.save()]);

      //5- Responder al cliente
      res.send("Tarea creada");
    } catch (error) {
      console.log(error);
    }
  };
}

/**
 * Para crear una tarea PRIMERO debemos verificar si el proyecto al que se le va a asignar la tarea EXISTE. Un proyecto --> varias tareas - Una tarea --> UN SOLO proyecto. Una vez que nos aseguramos que el proyecto existe, manejamos los campos de la tarea (model/Task-> name, description, project, status | name y description vienen del body del cliente | project lo acabamos de validar que existe y viene de la URL. Se lo agregamos al objeto task con un push porque habiamos definido que las tareas pueden ser MUCHAS, entonces es un ARRAY de Task y para agregar un nuevo elmento a un array es con push como toda la vida bebe. | status esta por default en pending.)
 * 
 * Por que no guardar el objeto completo en project en lugar de los IDs ?? 
 * 
 *          El problema de guardar objetos completos:
 * 
Tarea 1 cambia su status a "completed"
     ↓
Tenés que actualizar Task en su colección
     ↓
Y también actualizar el objeto dentro de Project
     ↓
Dos lugares con la misma data → inconsistencia garantizada

Con IDs:
Tarea 1 cambia su status
     ↓
Solo actualizás en la colección Task
     ↓
Project siempre busca la data fresca con el ID
     ↓
Un solo lugar de verdad
 * 
 *  En createTask tenemos 2 await (task y project), ademas estamos validando si existe el proyecto. Esto se puede 'limpiar' con Promise.allSettled y 'refactorizando' la validacion con un middleware para que la funcion quede lo mas 'compacta'posible. Para ello creamos otro archivo en /middleware --> projet.ts
 * 
 * 
 * Los req.project de createTask son porque en el middleware le agregamos, por medio de la duplicacion de interface de Request de Express modificando el scope golabal, la property project.
 * 
 * Para terminar de 'limpiar' el crontroller createTask agrupamos los 2 await. Por que? por qu NO dependen uno del otro. Nos valemos de un metodo nativo de Ts/Js Promise.allSettled   para en UN SOLO PASO guardar en la DB. Si el resultado de un await modificara el otro await ahi SI los dejamos separados. Es un array de Promises.. tiene un solo await y ahi se juntan las promises que quieras.. bellisimo.
 * 
 *     Promise.all        → operaciones que DEPENDEN entre sí
                     si una falla, las demás no tienen sentido

     Promise.allSettled → operaciones INDEPENDIENTES
                     querés que todas intenten aunque alguna falle
                     y querés saber el resultado de cada una
 * 



                     // Promise.all        → falla una → catch automático
// Promise.allSettled → falla una → NO catch, revisás resultados manualmente

// Cómo manejar resultados manualmente con allSettled:
const results = await Promise.allSettled([task.save(), req.project.save()]);

results.forEach(r => {
  if (r.status === 'fulfilled') console.log('ok', r.value)
  if (r.status === 'rejected')  console.log('falló', r.reason)
})

const hasFailed = results.some(r => r.status === 'rejected');

if (hasFailed) {
  return res.status(500).json({ error: "Error al guardar" });
}

// Si hasFailed no se cumple → todas las promises funcionaron → respondés al cliente
res.send("Tarea creada");
 * 
 * 
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 

 */
