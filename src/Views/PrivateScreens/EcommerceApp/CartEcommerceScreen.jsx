//Components
import { View, FlatList, StyleSheet, Text } from "react-native";
import CartItemCard from "../../../components/EcommerceAppComponents/CartItemCard";
import { Button } from "react-native-paper";

//Funciones y hooks
import { useSelector } from "react-redux";

const CartEcommerceScreen = () => {
  const { ListProducts, totalPriceCart }  = useSelector((state)=> state.cart)

  return (
    <View style={styles.container}>
      <FlatList
        data={ListProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartItemCard product={item} />}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${totalPriceCart}</Text>
        <Button
          mode="contained"
          style={styles.checkoutButton}
        >
          Checkout
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  totalContainer: {
    paddingBottom: 10,
    paddingTop: 10,
    width: "100%",
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#e1d4e7",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  checkoutButton: {
    marginTop: 10,
    backgroundColor: "#6200ee",
    padding: 10,
    borderRadius: 5,
  },
});

export default CartEcommerceScreen;
