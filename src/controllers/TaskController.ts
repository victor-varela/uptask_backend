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
  static getProjectTasks = async (req: Request, res: Response) => {
    try {
      //buscamos las tareas que PERTENEZCAN al Proyecto.
      const tasks = await Task.find({ project: req.project._id }).populate("project"); //esto es sintaxis de mongoose. Para mongoose los objetos (todo es un objeto en Js) SON Las Querys. Le envia un objeto y luego lo interpreta como filtro (por el metodo que usamos .find)- El tema populate es otra cosa.

      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  };

  static getTaskById = async (req: Request, res: Response) => {
    try {
      //capturamos id del param
      const { taskId } = req.params;
      //Buscamos la tarea en la DB
      const task = await Task.findById(taskId);
      //validamos si existe la tarea
      if (!task) {
        const error = new Error("Tarea no encontrada");
        return res.status(404).json({ error: error.message });
      }

      //validamos si la tarea corresponde con su respectivo proyecto-> usamos el req.project._id que habiamos hecho en el conjuro. Aplicamos toString para que sea valida la comparacion

      if (task.project.toString() !== req.project._id.toString()) {
        const error = new Error("Accion no valida");
        //retornamos- Paramos el codigo- lo botamos al cliente
        return res.status(400).json({ error: error.message });
      }
      //paso la validacion retornamos al cliente la tarea
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  };

  static updateTask = async (req: Request, res: Response) => {
    try {
      //buscar taskID
      const { taskId } = req.params;

      const task = await Task.findByIdAndUpdate(taskId, req.body); //le enviamos el id y el body a esta funcion. La funcion reemplaza 'update' el body en la DB sin hacer .save() lo hace automatico

      //Validamos que exista task y retornamos si hay error
      if (!task) {
        const error = new Error("Tarea no encontrada");
        return res.status(404).json({ error: error.message });
      }

      //validamos que tarea y proyecto se correspondan
      if (task.project.toString() !== req.project._id.toString()) {
        const error = new Error("Accion no valida");
        return res.status(400).json({ error: error.message });
      }

      //paso validacion respondemos al cliente
      res.send("Tarea actualizada correctamente");
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
 * En obtener tareas me habia confundido, pense en buscar en Project.. nada que ver, hay que buscar las tareas, la semantica ayyuda para eso.. obtener las tareas where project: project.id . EN compass te das cuenta que hay VARIAS tareas con el MISMO projectId eso significa que son de ese UNICO proyecto.. ahi entiendes todo.
 *
 * Para INCLUIR los detalles del proyecto al que pertenecen las tareas hacemos un populate. Lo importante aca es pasarle a ese populate la REFERENCIA en donde esta la poblacion? de lo que queremos INLCUIR. Esas referencias las declaramos en los MODELOS. Le pasamos el nombre del OBJETO, no el nombre del modelo. EN el modelo esta asi: 
 *          
 *          /models/Project.ts
 * 
 *            tasks: [
       {
         type: Types.ObjectId,
         ref: "Task",
       },
     ],
   },
 *     El objeto se llama 'tasks'. Es un array de objetos con un type y un ref definidos. Eso lo lee mongoose y sabe donde esta la referencia. No confundir ref:'Task' con el nombre que pasamos a populae. Lo mismo para el modelo Task.ts

              project: {
                    type: Types.ObjectId,
                    ref: "Project",
                  },
                  Esto es un objeto que se llama project y es otro objeto con type y ref definidos. Supongo que mongoose en cuanto lee el parametro que tiene el populate busca ese objeto y dentro en ref encuentra los datos y hace el JOIN. En este caso, estamos usando el modelo Task.find --- eso ya le dice mongoose que esta en Task, luego populate('project') -> andá en el campo/objeto project y ahí en ref está lo que tienes que JOIN. 
 * 
 * 
    populate("project") le dice a Mongoose: "andá al campo project de este documento, leé su ref interno, y traé el documento     completo desde ese modelo". populate() recibe el nombre del campo en el Schema, no el nombre del modelo. Populate es lo maximo para cruzar documentos, relacionar unos con otros!! 
 * 
 * Para validar que las tareas se correspondan con su respectivo proyecto. Aca lo importante es: estamos el controller de TASK. Este endpoint requiere el proyectId que lo estamos validando antes que todo con req.param(). Este param ya viene del cliente. La verificacion es == param de la URL 'proyectID' debe ser igual a la propiedad 'project' que tiene el modelo TASK.
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
