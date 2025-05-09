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
}, {
    versionKey: false
})

// El modelo se basa en el esquema videoJuegoSchema para interactuar con la colección de juegos en la base de datos.
const VideoJuego = model("VideoJuego",  videoJuegoSchema)


// 1.   Crear un nuevo documento en la base de datos.
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

// 2.   Obtener todos los documentos de la colección.
const obtenerJuego = async ()=>{
    try {
        const juegos = await VideoJuego.find()
        return{
            success:true,
            data:juegos,
            message: "Estos son todos los juegos disponibles"
        }
    } catch (error) {
        return{ success:false, message:"Lo siento, no se pudieron obtener los juegos"}
    }
}

// 3.   Obtener un documento por su ID.
const obtenerJuegoId = async (id: string) =>{
    try {
        const juegoId = await VideoJuego.findById(id)
        if(!juegoId){
            return{ success:false, message: "No se puedo obtener el juego asignado"}
        }
        return {
            success: true,
            data:juegoId,
            message: "Juego obtenido correctamente"
        }
    } catch (error: any) {
        return{
            success:false, error: error.message
        }
    }
}

// 4.    Actualizar un documento existente.
const actualizarJuego = async (id:string, datosActualizados: Partial<VideoJuego>) =>{
    try {
        const actualizacion = await VideoJuego.findByIdAndUpdate(id, datosActualizados, { new: true })
        if(!actualizacion) return { success:false, message: "El juego no se actualizó"}
        return{
            success: true,
            data:actualizacion,
            message: "¡Tu juego ya está actualizado!"
        }
    } catch (error:any) {
        return { success:false, error: error.message}
    }
}

// 5.    Eliminar un documento por su ID.
const borrarJuego = async (id:string) =>{
    try {
        const juegoBorrado = await VideoJuego.findByIdAndDelete(id)
        if(!juegoBorrado){
            return {success:false, message:"El juego no fue eliminado"}
        } return{
            succes: true,
            data:juegoBorrado,
            message: "El juego elegido fue eliminado correctamente"
        }
    } catch (error: any) {
        return{success:false, error: error.message}
    }
}


const main= async () =>{
    await connectMongo()

//FUNCION LLAMADA PARA GUARDAR UN JUEGO
        // const juegoGuardado = await nuevoJuego({
        //     titulo:"Fifa 25",
        //     genero: "Deporte", 
        //     consola: "PS5", 
        //     lanzamiento: 2024, 
        //     completado: true})
        // console.log(juegoGuardado)

//FUNCION LLAMADA PARA OBTENER TODOS LOS JUEGOS
        // const listaJuegos = await obtenerJuego()
        // console.log(listaJuegos)

//FUNCION LLAMADA PARA OBTENER UN SOLO JUEGO CON EL ID
        // const juegoObtenido = await obtenerJuegoId("681d18ba38eef67bcd8b0641")
        // console.log(juegoObtenido)

//FUNCION LLAMADA PARA ACTUALIZAR UN JUEGO POR SU PROPIEDAD
        // const resultadoJuego = await actualizarJuego('681d18ba38eef67bcd8b0641', { titulo: "NBA 2K24"});
        // console.log(resultadoJuego);

//FUNCION LLAMADA PARA BORRAR UN JUEGO 
        // const borrado = await borrarJuego("681d18b64abe2710cc8f1e1b")
        // console.log(borrado)
}

main()