import { Text, Surface } from "react-native-paper";
const HomeScreen = () => {
  return (
    <Surface style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>My Intelly</Text>
    </Surface>
  );
};

export default HomeScreen;
