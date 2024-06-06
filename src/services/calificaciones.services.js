import model from "../models/calificaciones.models.js"

const getCalificaciones = async () => {
    const calificaciones = await model.getCalificaciones()
    return calificaciones
}

const getCalificacion = async (id) => {
    const calificacion = await model.getCalificacion(id)
    return calificacion
}

const agregarCalificaciones = async (data) => {
    const calificacion = await model.agregarCalificaciones(data)
    return calificacion
}

const modificarCalificacion = async (id, data) => {
    const calificacion = await model.modificarCalificacion(id, data)
    return calificacion
}

const borrarCalificacion = async (id) => {
    const calificacion = await model.borrarCalificacion(id)
    return calificacion
}

export default {
    getCalificaciones,
    getCalificacion,
    agregarCalificaciones,
    modificarCalificacion,
    borrarCalificacion
}