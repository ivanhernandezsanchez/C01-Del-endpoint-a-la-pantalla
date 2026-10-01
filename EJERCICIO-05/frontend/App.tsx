import { Button, SafeAreaView, Text } from 'react-native';

const API_URL = 'http://172.22.26.111:3008';

export default function App() {
  const cargarMensaje = async () => {
    const respuesta = await fetch(
      API_URL + '/mensaje'
    );

    const datos = await respuesta.json();
    console.log(datos);
  };

  return (
    <SafeAreaView>
      <Text>Mi primera conexión</Text>

      <Button
        title="Conectar con Nest"
        onPress={cargarMensaje}
      />
    </SafeAreaView>
  );
}
