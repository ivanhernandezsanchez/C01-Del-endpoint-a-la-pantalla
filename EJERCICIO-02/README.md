# EJERCICIO-02 · API de pizzas

## Qué he aprendido
He aprendido a separar el trabajo: el Controller recibe la petición y el Service se ocupa de los datos.

## Respuesta a la pregunta de comprensión
El array está en el Service para que los datos y su lógica estén juntos, sin llenar el Controller con ese trabajo.

## Qué he modificado
He añadido una tercera pizza con un emoji y un precio, conservando las dos pizzas iniciales.

## Resultado
GET /pizzas debe devolver las tres pizzas. Desde backend/, ejecuta npm run start:dev y prueba http://localhost:3000/pizzas.