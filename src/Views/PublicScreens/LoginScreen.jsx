//Components
import Login from "../../components/Login"
import { View, StyleSheet } from "react-native"

//Funciones y hooks

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <Login/>
    </View>
  )
}


export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    flex: 1,
    justifyContent: 'center',
  },
});