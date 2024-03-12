// Components
import { View, StyleSheet, Image } from "react-native";
import { Button, Text } from "react-native-paper";
// Funciones y Hooks
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";



const WelcomeScreen = () => {
  const navigation = useNavigation();
  const { username } = useSelector((state) => state.user);


  return (
    <View style={styles.container}>
      <View style={styles.imageWelcomeContainer}>
        <Image
          style={styles.imageWelcome}
          source={require("../../assets/welcomeImage.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ fontWeight: 700 }} variant="headlineLarge">
          Welcome {username}
        </Text>
        <Text variant="titleMedium">The best app for you 🖐️</Text>
      </View>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        Get Started
      </Button>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    
  },
  imageWelcomeContainer: {
    width: 310,
    height: 350,
    marginBottom: 50
  },
  imageWelcome: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    width: "90%",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    width: "50%",
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
