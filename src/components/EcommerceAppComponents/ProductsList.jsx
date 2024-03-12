//Components
import { StyleSheet, FlatList } from "react-native";
import CardProduct from "./CardProduct";
import { ActivityIndicator } from "react-native-paper";

//Funciones y hooks
import useProductsQuery from "../../hook/EcommerceHooks/useProductsQuery";
import { filterByCategory, filterBySearch } from "../../utils/filter";


const ProductsList = ({ searchQuery, selectedCategory }) => {
  const { data: productsData, isSuccess, isError } = useProductsQuery();

  if (!isSuccess) {
    return <ActivityIndicator animating={true} />;
  }

  const filteredProducts = productsData.filter((product) => {
    return (
      filterByCategory(product, selectedCategory) &&
      filterBySearch(product, searchQuery)
    );
  });

  return (
    <FlatList
      contentContainerStyle={styles.gridContainer}
      data={filteredProducts}
      numColumns={2}
      renderItem={({ item }) => <CardProduct product={item} />}
      keyExtractor={(item) => item.id.toString()} // Ajusta esto según la estructura de tus datos
    />
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    justifyContent: "space-between",
    padding: 8,
  },
});

export default ProductsList;
