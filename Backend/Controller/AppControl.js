import { ModeloGatos } from "./AppModel.js"
ModeloGatos.create({
    nombre:"Naranjo",
    raza: "Atigrado",
    months:10
})
    
const Gato1 = () =>{
    console.log("Funciona el controlador")
}