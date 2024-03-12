import { FlatList, View, StyleSheet } from "react-native";
import DeviceCard from "./DeviceCard";

export const DeviceList = ({ devices }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={devices}
        keyExtractor={(device, index) => index.toString()}
        renderItem={({ item }) => (
          <DeviceCard key={item.id_device} deviceData={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    width: "90%",
    backgroundColor: "#fff", // Puedes ajustar el color de fondo según tus preferencias
  },
});
