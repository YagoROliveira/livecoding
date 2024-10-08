import { View, Text, Button, TextInput } from "react-native";

export default function HomeScreen() {
  // Valide o email do usuario e a senha para que sejam os mesmos abaixo;
  // email@teste.com.br
  // @teste@demo

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "white",
      }}
    >
      <Text>E-mail</Text>
      <TextInput></TextInput>
      <Text>Senha</Text>
      <TextInput></TextInput>
      <Button title="Enviar" />
    </View>
  );
}
