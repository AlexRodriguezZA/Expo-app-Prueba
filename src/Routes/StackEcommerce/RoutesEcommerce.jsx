//Components
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeEcommerceScreen from '../../Views/PrivateScreens/EcommerceApp/HomeEcommerceScreen';
import CartEcommerceScreen from '../../Views/PrivateScreens/EcommerceApp/CartEcommerceScreen';


//Fuciones
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';



const Tab = createBottomTabNavigator();


const EcommerceTabNavigator = () => {
  const { totalProductsCart } = useSelector((state) => state.cart);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="home" size={24} color="violet" />,
         headerShown: false
        }}
        component={HomeEcommerceScreen}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="cart" size={24} color="violet" />,
          tabBarBadge: totalProductsCart,
          headerShown: false
        }}
        component={CartEcommerceScreen}
      />
    </Tab.Navigator>
  );
};

export default EcommerceTabNavigator;
