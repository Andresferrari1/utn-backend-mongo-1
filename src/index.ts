import {Schema, model, connect } from "mongoose"

process.loadEnvFile()
const URI_DB= process.env.URI_DB || ""


const connectMongo = async () =>{
    try {
        await connect(URI_DB)
        console.log("Conectado a MongoDB")
    } catch (error) {
        console.log("Fallo la conexion a MongoDB")
    }
}

interface VideoJuego{
    titulo:string,
    genero:string,
    consola: string,
    lanzamiento:number,
    complatado:boolean
}

// El esquema es para registrar juegos con DATOS como título, consola, género, etc..
const videoJuegoSchema = new Schema({
    titulo: {type: String, required: true, unique:true},
    genero:{type:String, required: true},
    consola:{type:String, required:true},
    lanzamiento: {type: Number, required:true},
    completado:{ type: Boolean, default:false}
})

// El modelo se basa en el esquema videoJuegoSchema para interactuar con la colección de juegos en la base de datos.
const VideoJuego = model("VideoJuego",  videoJuegoSchema)



const nuevoJuego = async () =>{
    try {
        
    } catch (error) {
        
    }
}

const obtenerJuego = async ()=>{
    try {
        
    } catch (error) {
        
    }
}

const obtenerJuegoId = async (id: string) =>{
    try {
        
    } catch (error) {
        
    }
}

const actualizarJuego = async () =>{
    try {
        
    } catch (error) {
        
    }
}

const borrarJuego = async () =>{
    try {
        
    } catch (error) {
        
    }
}
connectMongo()