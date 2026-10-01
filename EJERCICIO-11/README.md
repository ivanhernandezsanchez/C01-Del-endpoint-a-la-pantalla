# EJERCICIO-11 · Añade productos

## Qué he aprendido
He aprendido a enviar datos desde un formulario para crear un producto y a volver a cargar la lista.

## Respuesta a la pregunta de comprensión
La app envía el nombre y el precio con una petición POST. En el backend, @Body() recoge esos datos para que el Service pueda añadir el producto.

## Qué he modificado
He conectado los campos de nombre y precio con POST /productos, y he actualizado la lista después de crear un producto.

## Resultado
Primero comprueba GET /productos. Luego abre Expo, completa nombre y precio y pulsa **Añadir producto**. El nuevo producto debe aparecer en la lista. Los cambios guardados en el array temporal se pierden al reiniciar NestJS.