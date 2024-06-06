# parcial-tp2-cromero

## Setup del proyecto
Parcial de la materia Taller de Programación 2 de la ORT.
### Configuración 
```
npm install
```
### Para levantarlo
```
npm start
```
## Rutas
Obtener todas las calificaciones (GET)
```
http://localhost:8080/calificaciones
```
Obtener un alumno por ID (GET)
```
http://localhost:8080/calificaciones/ID
```
Agregar alumno (POST) Para agregarlo se debe envíar en formato JSON como { "calificaciones": [{"nombre": "", "nota": 0}]}. Ya que se puede agregar más de uno.
```
http://localhost:8080/calificaciones
```
Modificar alumno (PUT) Enviar JSON con los datos a actualizar.
```
http://localhost:8080/calificaciones/ID
```
Eliminar alumno (DELETE) 
```
http://localhost:8080/calificaciones/ID
```