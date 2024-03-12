//Components
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Title, Button, Searchbar } from "react-native-paper";
import ProductsList from "../../../components/EcommerceAppComponents/ProductsList";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//Funciones y hooks
import { useState } from "react";

const HomeEcommerceScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const categories = [
    { icon: "home", attribute: "all" },
    { icon: "cellphone", attribute: "electronics" },
    { icon: "diamond-stone", attribute: "jewelery" },
    { icon: "tshirt-crew", attribute: "men's clothing" },
    { icon: "dresser", attribute: "women's clothing" },
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        {
          backgroundColor:
            selectedCategory === item.attribute ? "#fff" : "transparent",
        },
      ]}
      onPress={() => handleCategorySelect(item.attribute)}
    >
      <Button
        mode="contained-tonal"
        icon={() => (
          <Icon
            name={item.icon}
            size={20}
            color={selectedCategory === item.attribute ? "white" : "#000"}
          />
        )}
      >
        {item.attribute}
      </Button>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Ecommerce App</Title>

      <Searchbar
        style={styles.searchInput}
        placeholder="Search"
        onChangeText={(value) => handleSearch(value)}
        value={searchQuery}
      />

      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.attribute}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      />

      <ProductsList
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
    fontWeight: "700",
  },
  searchInput: {
    width: "80%",
  },
  categoriesContainer: {
    marginBottom: 10,
    marginTop: 20,
  },
  categoryButton: {
    borderRadius: 5,
    height: 60,
    overflow: "hidden",
    padding: 5,
  },
});

export default HomeEcommerceScreen;
