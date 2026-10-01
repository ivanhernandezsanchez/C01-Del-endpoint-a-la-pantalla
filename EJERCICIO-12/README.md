# EJERCICIO-12 · Creature Lab

## Qué he aprendido
He aprendido a unir lo practicado: cargar una lista, elegir un elemento, consultar sus datos y modificarlo desde la app.

## Respuesta a la pregunta de comprensión
La app no cambia los datos por su cuenta: envía una petición al Controller, el Service trabaja con los datos y la respuesta vuelve para actualizar la pantalla.

## Qué he modificado
He conectado la lista de criaturas con GET /criaturas, la selección con GET /criaturas/:id y el botón de me gusta con PATCH /criaturas/:id/like.

## Resultado
Arranca el backend y después Expo. La app debe mostrar las criaturas, permitir seleccionar una y aumentar sus me gusta. El cambio se guarda temporalmente en memoria y vuelve al valor inicial al reiniciar NestJS. Comprueba que API_URL use la IP local y el puerto que escucha el backend.