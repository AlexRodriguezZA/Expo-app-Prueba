//Components
import { Card, IconButton, Title, Paragraph } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";

//Funciones y hooks
import { useDispatch } from "react-redux";
import { deleteProducto } from "../../Redux/Reducers/Cart/cartSlice";

const CartItemCard = ({ product }) => {

  const dispatch = useDispatch()

  const HandleDeleteProducto = ()=>{
    dispatch(deleteProducto(product.id))
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
  
        <Card.Content>       
          <Image source={{ uri: product.image }} style={styles.productImage} />

          <Title>{product.name}</Title>
          <Paragraph>Price: ${product.price} c/u</Paragraph>
          <Paragraph>Quantity: {product.totalProd} uni.</Paragraph>

          <IconButton icon="delete" size={20} onPress={HandleDeleteProducto} />

        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "#fff",
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  card: {
    flex: 1,
  },

});

export default CartItemCard;
