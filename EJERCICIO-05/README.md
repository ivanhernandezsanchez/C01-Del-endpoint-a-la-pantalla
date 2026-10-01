# EJERCICIO-05 · Primera conexión con la API

## Qué he aprendido
He aprendido que la app puede enviar una petición con fetch() y recibir una respuesta de NestJS.

## Respuesta a la pregunta de comprensión
fetch() conecta la app con una dirección del backend. El Controller recibe la petición y devuelve datos en formato JSON.

## Qué he modificado
He conectado el botón de la app con GET /mensaje y he comprobado la respuesta que devuelve el backend.

## Resultado
Primero inicia y prueba el backend con npm run start:dev y GET /mensaje. Después inicia Expo con npx expo start desde frontend/ y pulsa Conectar con Nest. En un móvil físico, usa en API_URL la IP local del ordenador y el mismo puerto del backend; la respuesta de este ejemplo se consulta en la consola de Expo.