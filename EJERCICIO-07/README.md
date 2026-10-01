# EJERCICIO-07 · Carga al abrir la app

## Qué he aprendido
He aprendido a pedir información automáticamente cuando aparece la pantalla y a permitir que el usuario vuelva a cargarla.

## Respuesta a la pregunta de comprensión
useEffect decide cuándo llamar a la función que hace la petición. Con la lista de dependencias vacía, la carga inicial se hace al abrir la pantalla.

## Qué he modificado
He mantenido la petición a GET /mensaje, he añadido la carga inicial y he conservado el botón **Recargar**.

## Resultado
Arranca NestJS y comprueba GET /mensaje. Después inicia Expo: el mensaje debe cargarse al abrir la app y el botón **Recargar** debe volver a pedirlo. Si el texto del backend no cambia, verás el mismo mensaje aunque la petición se repita. Revisa que API_URL use la IP local y el puerto correctos.