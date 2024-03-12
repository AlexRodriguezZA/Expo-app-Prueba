//Components
import { Modal, Portal, Text, Button } from "react-native-paper";
import { Image, View, StyleSheet } from "react-native";
import AlertAddToCart from "./AlertAddToCart";
//Funciones y hooks
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductCart } from "../../Redux/Reducers/Cart/cartSlice";

const ModalDetailProduct = ({ visible, hideModal, productData }) => {
  const containerStyle = { backgroundColor: "white", padding: 20 };
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const [expandedDescription, setExpandedDescription] = useState(false);

  //Lógica para mostrar la alerta de que fue cargada con éxito los productos al carrito
  const [visibleAlert, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //Nos permite manejar el boton de ver mas o ver menos en la descripción del producto
  const toggleDescription = () => {
    setExpandedDescription(!expandedDescription);
  };

  const handleAddToCart = () => {
    const newProduct = {
      totalProd: quantity,
      name: productData.title,
      price: productData.price,
      image: productData.image,
      id: productData.id,
    };
    dispatch(addProductCart(newProduct));
    setQuantity(1)
    showDialog();
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        {productData && (
          <View>
            <Image
              source={{ uri: productData.image }}
              style={styles.productImage}
            />

            <Text style={styles.productTitle}>{productData.title}</Text>

            <Text
              style={styles.productPrice}
            >{`Price: $${productData.price}`}</Text>

            <Text
              style={styles.productCategory}
            >{`Category: ${productData.category}`}</Text>

            <Text style={styles.productDescription}>
              {expandedDescription
                ? productData.description
                : `${productData.description.slice(0, 150)}...`}
            </Text>

            <Button onPress={toggleDescription}>
              {expandedDescription ? "Ver menos" : "Ver más"}
            </Button>

            <View style={styles.quantityContainer}>
              <Button
                icon="minus"
                mode="contained-tonal"
                onPress={decreaseQuantity}
              />
              <Text style={styles.quantityText}>{quantity}</Text>
              <Button
                mode="contained-tonal"
                onPress={increaseQuantity}
                icon="plus"
              />
            </View>

            <Button
              style={styles.buttonAddTocart}
              onPress={() => handleAddToCart()}
              icon="cart"
              mode="contained"
            >
              Add to Cart
            </Button>

            <Button icon="close" onPress={hideModal}>
              Close
            </Button>
          </View>
        )}
      </Modal>
      <AlertAddToCart visible={visibleAlert} hideDialog={hideDialog} />
    </Portal>
  );
};

const styles = StyleSheet.create({
  productImage: {
    width: "100%",
    height: 300,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    color: "#78288C",
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 5,
  },
  productCategory: {
    color: "#78288C",
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 5,
  },

  productDescription: {
    fontSize: 16,
    marginBottom: 10,
    color: "grey"
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },

  buttonAddTocart: {
    height: 50,
    justifyContent: "center",
  },
  quantityText: {
    textAlign: "center",
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default ModalDetailProduct;
