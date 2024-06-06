const calificaciones = [
    {
        id: 1,
        nombre: "Buda",
        nota: 10
    },
    {
        id: 2,
        nombre: "Basquiat",
        nota: 8
    }
]

const getCalificaciones = async () => {
    return calificaciones
}

const getCalificacion = async (id) => {
    const alumno = calificaciones.find((e) => e.id == id)
    if (index === -1){
        throw new Error("El alumno no existe!")
    } else{
        return `¡Hola ${alumno.nombre}! Tu nota es ${alumno.nota}.`
    }
}

const agregarCalificaciones = async (data) => {
    try {
        data.map((alumno) => calificaciones.push({id: calificaciones.length + 1, ...alumno}))
        return data
    } catch(err){

    }
}

const modificarCalificacion = async (id, data) => {
    data.id = id
    const index = calificaciones.findIndex((e) => e.id == id)
    if (index === -1){
        throw new Error("El alumno no existe!")
    } else{
        calificaciones.splice(index, 1, data)
        return data
    }
}

const borrarCalificacion = async (id) => {
    const index = calificaciones.findIndex((e) => e.id == id)
    if (index === -1){
        throw new Error("El alumno no existe!")
    } else{
        calificaciones.splice(index, 1)
        return "Eliminado correctamente!"
    }
}

export default {
    getCalificaciones,
    getCalificacion,
    agregarCalificaciones,
    modificarCalificacion,
    borrarCalificacion
}