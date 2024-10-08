import { View, Text, Button, TextInput } from "react-native";

export default function HomeScreen() {
  // Valide o email do usuario e a senha para que sejam os mesmos abaixo;
  // email@teste.com.br
  // @teste@demo

  // O Botao deve estar desativado até que os dados estejam preenchidos.
  // Ao clicar no botao, validar os dados dos campos.
  // Em caso dos campos estarem ok deve-se exibir um alerta com sucesso ou caso nao com erro.

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
