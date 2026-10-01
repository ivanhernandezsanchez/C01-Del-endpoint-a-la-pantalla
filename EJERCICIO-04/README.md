# EJERCICIO-04 · Filtra videojuegos

## Qué he aprendido
He aprendido a pedir la lista completa de juegos o a filtrar sus resultados por género.

## Respuesta a la pregunta de comprensión
Un parámetro de ruta forma parte de la dirección, como /juegos/3. Un parámetro de consulta va después de ? y sirve para añadir un filtro, como /juegos?genero=Aventura.

## Qué he modificado
He creado cuatro juegos y he preparado el filtro opcional por género, manteniendo la lista completa cuando no se indica ningún filtro.

## Resultado
Prueba GET /juegos y GET /juegos?genero=Aventura. Ejecuta npm run start:dev desde backend/. El nombre del género debe coincidir con el que aparece en los datos.