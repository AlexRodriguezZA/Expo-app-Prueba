import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

const DeviceCard = ({ deviceData }) => {
  return (
    <Card style={styles.container}>
      {deviceData.photo ? (
        <Card.Cover source={{ uri: deviceData.photo }} />
      ) : (
        <Card.Cover source={require("../assets/notImage.jpg")}        />
      )}
      <Card.Content>
        <Text variant="titleLarge">Name: {deviceData.device_name}</Text>
        <Text variant="bodyMedium">Model: {deviceData.device_model}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginBottom: 16, 
  },
});

export default DeviceCard;
