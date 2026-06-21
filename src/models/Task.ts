import mongoose, { Schema, Document, Types } from "mongoose";

//1- Creamos el Type o Interface
export interface ITask extends Document {
  name: string;
  description: string;
  //asginamos un proyecto a cada tarea. Aca le asignamos el tpye a ese proyecto.-> objectId (que viene de monggose ya que es unico y lo crea directamente mongoose, lo ves en mongoDb compass)
  project: Types.ObjectId;
}

//Se vana agregar mas campos al modelo como project para saber a que proyecto pertenece cada tarea y tal vez otros campos mas.

// 2- Definimos el Schema con mongoose
export const TaskSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    //Agregamos el campo project en el schema. Asignamos type y muy importante la referencia--> donde esta el modelo que voy a conectar
    project: {
      type: Types.ObjectId,
      ref: "Project",
    },
  },
  { timestamps: true },
);

//3- Definimos el modelo en si- conectamos modelo con mongoose
const Task = mongoose.model<ITask>("Task", TaskSchema);

//exportamos defautl para despues llamarlo con cualquier nombre en otro archivo
export default Task;

/**
 * Aca creamos un modelo
 * 1- Creamos el Type o Interface --> tiene los campos del modelo. Aca declaramos que tipo de dato son los campos del modelo. Fijate que ese interface/type es que en la parte 3 cuando creamos Task 'el modelo en si' y via generics asignamos el interface/type del modelo. Esta es la parte para Ts.
 *
 * 2- Definimos el Schema con mongoose --> por cada campo un objeto con el type y otras verificaciones de que nos da mongoose como trim, required, etc EL type en este caso lo asignamos con ayuda de mongoose. Fijate que son en MAYUSCULA para diferenciarlos de los types de Ts
 *
 * 3- Definimos el modelo en SI conectamos modelo con mongoose--> const modelName = mongoose.model<typeOfModelorInterface>('modelName',modelSchema) en este paso se CONECTAN todas las funciones del archivo. Se define el modelo con mongoose 'mongoose.model' se le asigna el type/interface < type/interfaceName > se nombre el modelo ('modelName',  ....) se le asigna el schema ('modelName', modelSchema)
 *
 *  Para crear un modelo necesitamos al menos: El Type del modelo, un schema y el modelo en si.
 * Se usan objetos { } para cada campo 'projectName, clientName, description, etc' del modelo y dentro de ese objeto se definie el type que va con MAYUSCULA porque es mongoose y propiedades adicionales que da mongoose como required, trim, unique etc
 *
 * El profesor cambio el Type del modelo. Antes estaba ProjectType en el modelo anterior y ahora lo cambia a IProject 'Interface' Por que hace eso??
 *
 * =====  LA PARTE MAS COMPLICADA HASTA AHORA DE LOS MODELOS--> CONECTAR UNOS CON OTROS --> PROJECT CON TASK
 *
 *      Debemos asignar un proyecto a cada tarea. Un proyecto puede tener muchas tareas pero una tarea SOLAMENTE un proyecto.
 *
 *      -DEFINIMOS LOS TYPES PARA TS EN EL MODELO (PROJECT):
 *       importamos {Types} de mongoose porque con el viene el objectID que es el identificador unico creado por mongoose y nos servimos de el para decirle a Ts el Type de ese campo
 *      agregamos el project: Types.objectId
 *
 *        - DEFINIMOS EL CAMPO Y EL TYPE EN EL SCHEMA (PROJECT): Agregamos el campo project en el schema. Asignamos type y muy importante la referencia--> donde esta el modelo que voy a conectar
 *
 *            project:{
 * type: Types.objectId
 * ref: 'project'
 * }
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
