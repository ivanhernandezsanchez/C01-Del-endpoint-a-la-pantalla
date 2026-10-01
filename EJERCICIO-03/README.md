# EJERCICIO-03 · Busca una mascota

## Qué he aprendido
He aprendido a buscar una mascota usando su identificador en la dirección de la petición.

## Respuesta a la pregunta de comprensión
El valor de id llega como texto desde la ruta. Lo convertimos con Number(id) porque el identificador guardado en la lista es un número.

## Qué he modificado
He añadido una mascota a la lista y he probado la búsqueda con varios identificadores, incluido uno que no existe.

## Resultado
Prueba GET /mascotas/1 y cambia el número para buscar otra. Ejecuta npm run start:dev desde backend/; la respuesta de un identificador inexistente depende de cómo se haya preparado el Service.