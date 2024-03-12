import React from "react";
import { Drawer } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";


const CustomDrawer = ({ rutas, filter }) => {
  const filteredRoutes = rutas.filter(
    (obj) => obj.module === filter
  );    
  const navigator = useNavigation()

  return (
    <Drawer.Section>
      {filteredRoutes.map((moduleObject, index) => (
        <React.Fragment key={index}>
          {moduleObject.routes.map((route, routeIndex) => (
            <Drawer.Item
              key={routeIndex}
              icon="arrow-right"
              label={route.setting_module_config.key}
              onPress={route.setting_module_config.key === "Device" ? () => navigator.navigate("Devices"): () => console.log("sin acceso")}
              style={{
                borderBottomWidth: 0,
                borderBottomColor: "gray",
              }}
              labelStyle={{
                color: "#333",
                fontSize: 16,
                fontWeight: "bold",
              }}
              iconStyle={{
                color: "#555",
                marginRight: 10,
              }}
            />
          ))}
        </React.Fragment>
      ))}
    </Drawer.Section>
  );
};

export default CustomDrawer;
