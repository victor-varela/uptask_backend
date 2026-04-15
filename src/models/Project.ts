import mongoose, { Schema, Document } from "mongoose";

//Definimos el Type- conectamos nuestro campo con el Document de mongoose del modelo para tener los utility types de TS
export type ProjectType = Document & {
  projectName: string;
  clientName: string;
  description: string;
};

// Definimos el Schema con mongoose
export const ProjectSchema = new Schema({
  projectName: {
    type: String,
    require: true,
    trim: true,
  },
  clientName: {
    type: String,
    require: true,
    trim: true,
  },
  description: {
    type: String,
    require: true,
    trim: true,
  },
});

// Definimos el modelo en si-- conectamos el schema con mongoose
const Project = mongoose.model<ProjectType>("Project", ProjectSchema);

export default Project;
//  Cuando un archivo exporta una sola cosa, export default es la elección natural.

//El nombre del proyecto no lo ponemos unico porque es muy probable que se repita: ecommerce, pos,etc. Pero en el caso de pacientes si puede ser unico.

/**
 * Para crear un modelo necesitamos al menos: El Type del modelo, un schema y el modelo en si.
 * Se usan objetos { } para cada campo 'projectName, clientName, description, etc' del modelo y dentro de ese objeto se definie el type que va con MAYUSCULA porque es mongoose y propiedades adicionales que da mongoose como required, trim, unique etc
 * 
 * ¿Por que el type es export y el Project es export default?
 * 
 *  ProjectType → named export porque es uno de varios exports posibles
    Project → default export porque es lo PRINCIPAL del archivo
 *
 *
 *
 *
 */
