//Funciones y hooks
import { useSelector } from "react-redux";

//Components
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import LogoutButton from '../../components/EcommerceAppComponents/ButtonLogout';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Ajusta según tu configuración de íconos
import { Avatar, Title, Caption, Drawer, Text } from "react-native-paper"; // Importa componentes de react-native-paper
import { StatusBar } from "expo-status-bar";

//Views
import HomeScreen from "../../Views/PrivateScreens/ScreensMenu/MYINTELLY/HomeScreen";
import ReportsScreen from "../../Views/PrivateScreens/ScreensMenu/REPORTS/ReportsScreen";
import TimeScreen from "../../Views/PrivateScreens/ScreensMenu/TIME/TimeScreen";
import Configuration from "../../Views/PrivateScreens/ScreensMenu/CONFIGU/Configuration";
import EcommerceTabNavigator from "../StackEcommerce/RoutesEcommerce";

const Menu = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const {username, email} = useSelector(state => state.user)
  return (
    <DrawerContentScrollView {...props}>
      <StatusBar translucent={true}/>
      <Drawer.Section style={{justifyContent: "center", alignItems: "center", marginTop: 30}}>
        
        <Avatar.Image
          source={{uri:'https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.2.2106358004.1710249478&semt=sph' }} 
          size={100}

        />
        <Title>{username}</Title>
        <Caption>{email}</Caption>
      </Drawer.Section>
      <DrawerItemList {...props} />
      <LogoutButton/>
    </DrawerContentScrollView>
  );
};

const DrawerNavigatorMenu = () => {
  return (
    <Menu.Navigator
      initialRouteName="MyIntelly"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Menu.Screen
        name="MyIntelly"
        component={HomeScreen}
        options={{
         
          drawerLabel: 'MyIntelly',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color="black" />
          ),
        }}
      />
      <Menu.Screen
        name="Reports"
        component={ReportsScreen}
        options={{
          drawerLabel: 'Reports',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file-document" size={size} color="black"/>
          ),
        }}
      />
     
      <Menu.Screen
        name="Time"
        component={TimeScreen}
        options={{
          drawerLabel: 'Time',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clock" size={size} color="black" />
          ),
        }}
      />
       <Menu.Screen
        name="Setting"
        component={Configuration}
        options={{
          drawerLabel: 'General',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" size={size} color="black" />
          ),
        }}
      />
      <Menu.Screen
        name="Ecommerce"
        component={EcommerceTabNavigator}
        options={{
          headerShown: true,

          drawerLabel: 'Ecommerce',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" size={size} color="black"/>
          ),
        }}
      />
    </Menu.Navigator>
  );
};

export default DrawerNavigatorMenu;
