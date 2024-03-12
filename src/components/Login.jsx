
//Components
import { View, StyleSheet, Image } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import LoadingLogin from "./LoadingLogin";

//Funciones y hooks
import { useState } from "react";
import { loginApi } from "../services/LoginServices/LoginApi";
import ErrorLogin from "./ErrorLogin";
import useAuthMutation from "../hook/useAuthMutation";

const Login = () => {
  const { mutate, isLoading, isError } = useAuthMutation(loginApi);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorDialogVisible, setErrorDialogVisible] = useState(false);

  const hideErrorDialog = () => {
    setErrorDialogVisible(false);
  };

  const handleLogin = () => {
    if ([email, password].includes("")) {
      setErrorDialogVisible(true);
      return;
    }
    mutate({ email, password });

    if (isError) {
      setErrorDialogVisible(true);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.imageLoginContainer}>
        <Image
          style={styles.imageLogin}
          source={require("../assets/loginImage.png")}
        />
      </View>
      <Text variant="titleLarge" style={styles.textLogin}>
        Iniciar Sesión
      </Text>
      <TextInput
        label="Email"
        value={email}
        style={styles.input}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        label="Contraseña"
        value={password}
        onChangeText={(value) => setPassword(value)}
        style={styles.input}
        secureTextEntry
      />
      <Button
        style={styles.button}
        icon="home"
        mode="contained"
        onPress={handleLogin}
      >
        Ingresar
      </Button>
      {isLoading && <LoadingLogin />}
      <ErrorLogin visible={errorDialogVisible} onDismiss={hideErrorDialog} />
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "90%",
  },
  imageLoginContainer: {
    width: 310,
    height: 350,
    marginBottom: 50,
  },
  imageLogin: {
    width: "100%",
    height: "100%",
  },

  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  textLogin: {
    fontWeight: "600",
    marginBottom: 12,
  },
  input: {
    width: "90%",
    marginBottom: 8,
  },
  button: {
    marginTop: 16,
    width: "70%",
  },
});
