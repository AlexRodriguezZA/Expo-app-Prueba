import { View, StyleSheet } from "react-native";
import CustomDrawer from "../../../../components/CustomDrawer";
import { useSelector } from "react-redux";

const TimeScreen = () => {
  const { listModels } = useSelector((state) => state.menuModel);

  return (
    <View style={styles.container}>
      <CustomDrawer rutas={listModels} filter="DASHBOARD_TIME_ATTENDANCE" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // Fondo blanco
  },
});

export default TimeScreen;
