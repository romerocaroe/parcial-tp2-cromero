import express from 'express'
import controller from '../controllers/calificaciones.controller.js'

const router = express.Router()

router.get("/calificaciones", controller.getCalificaciones)
router.get("/calificaciones/:id", controller.getCalificacion)
router.post("/calificaciones", controller.agregarCalificaciones)
router.put("/calificaciones/:id", controller.modificarCalificacion)
router.delete("/calificaciones/:id", controller.borrarCalificacion)

export default router