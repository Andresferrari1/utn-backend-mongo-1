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

const videoJuegoSchema = new Schema({
    titulo: {type: String, required: true, unique:true},
    genero:{type:String, required: true},
    consola:{type:String, required:true},
    Lanzamiento: {type: Number, required:true},
})

const videoJuego = model("videoJuego",  videoJuegoSchema)



connectMongo()