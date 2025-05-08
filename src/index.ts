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
    completado:boolean
}

// El esquema es para registrar juegos con DATOS como título, consola, género, etc..
const videoJuegoSchema = new Schema({
    titulo: {type: String, required: true, unique:true},
    genero:{type:String, required: true},
    consola:{type:String, required:true},
    lanzamiento: {type: Number, required:true},
    completado:{ type: Boolean, default:false }
})

// El modelo se basa en el esquema videoJuegoSchema para interactuar con la colección de juegos en la base de datos.
const VideoJuego = model("VideoJuego",  videoJuegoSchema)



const nuevoJuego = async (juegoNuevo: VideoJuego) =>{
    try {
        const {titulo,genero, consola,lanzamiento,completado} = juegoNuevo
        if(!titulo || !genero || !consola || lanzamiento === undefined ){
            return{success: false, error: "Juego no valido"}
        }
        const juegoNuevoDb = new VideoJuego({ titulo, genero, consola, lanzamiento, completado})
        await juegoNuevoDb.save()
        return{
            success:true,
            data: juegoNuevoDb,
            message: "El juego se añadio correctamente"
        }
    } catch (error:any) {
        return{
            success: false, error: error.message
        }
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


const main= async () =>{
    await connectMongo()

    const juegoGuardado = await nuevoJuego({
        titulo:"Fifa 25",
        genero: "Deporte", 
        consola: "PS5", 
        lanzamiento: 2024, 
        completado: true})
    console.log(juegoGuardado)
}

main()