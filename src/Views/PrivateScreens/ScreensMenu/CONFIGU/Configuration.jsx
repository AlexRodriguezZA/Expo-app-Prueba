//Components
import { View, StyleSheet } from "react-native"
import CustomDrawer from "../../../../components/CustomDrawer";

//Funciones y hooks
import { useSelector } from "react-redux";


const Configuration = () => {
  const { listModels } = useSelector((state) => state.menuModel);
  return (
    <View style={styles.container}>
      <CustomDrawer rutas={listModels} filter="GENERAL" />
    </View>
  );
}

export default Configuration
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // Fondo blanco
  },
});