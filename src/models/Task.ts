import mongoose, { Schema, Document } from "mongoose";

//1- Creamos el Type o Interface
export interface ITask extends Document {
  name: string;
  description: string;
}

//Se vana agregar mas campos al modelo como project para saber a que proyecto pertenece cada tarea y tal vez otros campos mas.

// 2- Definimos el Schema con mongoose
export const TaskSchema = new Schema({
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
});

//3- Definimos el modelo en si- conectamos modelo con mongoose
const Task = mongoose.model<ITask>("Task", TaskSchema);

//exportamos defautl para despues llamarlo con cualquier nombre en otro archivo
export default Task;

/**
 * Aca creamos un modelo
 * 1- Creamos el Type o Interface --> tiene los campos del modelo
 * 2- Definimos el Schema con mongoose --> por cada campo un objeto con el type y otras verificaciones de que nos da mongoose como trim, required, etc
 * 3- Definimos el modelo en SI conectamos modelo con mongoose--> const modelName = mongoose.model<typeOfModelorInterface>('modelName',modelSchema) en este paso se CONECTAN todas las funciones del archivo. Se define el modelo con mongoose 'mongoose.model' se le asigna el type/interface < type/interfaceName > se nombre el modelo ('modelName',  ....) se le asigna el schema ('modelName', modelSchema)
 *
 *  Para crear un modelo necesitamos al menos: El Type del modelo, un schema y el modelo en si.
 * Se usan objetos { } para cada campo 'projectName, clientName, description, etc' del modelo y dentro de ese objeto se definie el type que va con MAYUSCULA porque es mongoose y propiedades adicionales que da mongoose como required, trim, unique etc
 *
 * El profesor cambio el Type del modelo. Antes estaba ProjectType en el modelo anterior y ahora lo cambia a IProject 'Interface' Por que hace eso??
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
