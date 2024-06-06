import service from "../services/calificaciones.services.js"

const getCalificaciones = async (req, res) => {
    try {
        const calificaciones = await service.getCalificaciones()
        res.send(calificaciones)
    } catch (err){
        console.error("Error - "+err)
        res.send({statusCode: 500, message: err})
    }
}

const getCalificacion = async (req, res) => {
    try {
        const { id } = req.params
        const calificacion = await service.getCalificacion(id)
        res.send(calificacion)
    } catch (err){
        console.error("Error - "+err)
        res.send({statusCode: 500, message: err})
    }
}

const agregarCalificaciones = async (req, res) => {
    try {
        if(req.body.calificaciones == null || req.body.calificaciones == undefined || req.body.calificaciones == {} || req.body.calificaciones == []) throw new Error("Se requiere un nombre y una nota!")
        const nuevaCalificacion = req.body.calificaciones
        const calificacion = await service.agregarCalificaciones(nuevaCalificacion)
        res.send(calificacion)
    } catch (err){
        console.error("Error - "+err)
        res.send({statusCode: 500, message: err})
    }
}

const modificarCalificacion = async (req, res) => {
    try {
        const { id } = req.params
        const actualizacionCalificaciones = req.body
        const calificacion = await service.modificarCalificacion(id, actualizacionCalificaciones)
        res.send(calificacion)
    } catch (err){
        console.error("Error - "+err)
        res.send({statusCode: 500, message: err})
    }
}

const borrarCalificacion = async (req, res) => {
    try {
        const { id } = req.params
        const calificacion = await service.borrarCalificacion(id)
        res.send(calificacion)
    } catch (err){
        console.error("Error - "+err)
        res.send({statusCode: 500, message: err})
    }
}


export default {
    getCalificaciones,
    getCalificacion,
    agregarCalificaciones,
    modificarCalificacion,
    borrarCalificacion
}