# EJERCICIO-10 · Da un me gusta

## Qué he aprendido
He aprendido a enviar una petición que modifica una parte de un dato existente.

## Respuesta a la pregunta de comprensión
GET sirve para consultar. PATCH pide un cambio parcial, como sumar un me gusta a una mascota sin crear otra.

## Qué he modificado
He conectado el botón **Me gusta** con PATCH /mascotas/1/like y actualizo el número mostrado con la respuesta del backend.

## Resultado
Con el backend encendido, pulsa **Me gusta** varias veces y comprueba que el contador suba. Los datos viven en memoria, así que al reiniciar NestJS el contador vuelve a su valor inicial.