import {Schema, model} from "mongoose";
const esqDGatos = new Schema({
    name:String,
    raza:String,
    months: number
})
export const ModeloGatos =  new model("Tabla de Gatos", esqDeGatos)
