//Components
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import ModalDetailProduct from "./ModalDetailProduct";

//Funciones
import { truncateTitle } from "../../utils/truncateTitle";
import { useState } from "react";

const CardProducts = ({ product }) => {
  const truncatedTitle = truncateTitle(product.title, 20);

  //Lógica para manejar el modal de detalle del producto
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `${product.image}`,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{truncatedTitle}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.price}>${product.price}</Text>

          
        <Pressable style={styles.viewButton} onPress={() => showModal()}>
          <Text style={styles.viewButtonText}>View</Text>
        </Pressable>
      </View>

      <ModalDetailProduct
        productData={product}
        visible={visible}
        hideModal={hideModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 180,
    height: 280,
    marginBottom: 20,
    justifyContent: "center",
    overflow: "hidden",
    elevation: 3,
    marginRight: 10,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 5,
  },
  category: {
    fontSize: 12,
    fontWeight: "600",
    color: "#94a3b8",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
  },
  viewButton: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#000",
    width: "60%",
    height: 26,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  viewButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
});

export default CardProducts;
