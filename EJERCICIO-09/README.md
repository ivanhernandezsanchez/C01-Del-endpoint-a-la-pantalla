# EJERCICIO-09 · Busca un héroe desde la app

## Qué he aprendido
He aprendido a tomar un identificador escrito en la app, añadirlo a la dirección y buscar el héroe correspondiente.

## Respuesta a la pregunta de comprensión
El ID escrito en la app se convierte en una parte de la ruta, por ejemplo /heroes/2. En NestJS, @Param('id') recoge ese valor.

## Qué he modificado
He conectado el campo del ID y el botón **Buscar** con GET /heroes/:id, y muestro los datos del héroe encontrado.

## Resultado
Prueba primero GET /heroes/1 en el backend. Después, en Expo, escribe un ID y pulsa **Buscar**. La app debe mostrar el héroe que corresponde a ese número.