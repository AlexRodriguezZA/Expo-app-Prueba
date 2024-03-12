// Estos filtrados nos permiten buscar por productos y por categorias en el el home de ecommerce

export const filterByCategory = (product, selectedCategory) => {
    const todoSearchCategory = !selectedCategory || selectedCategory === 'all';
    return todoSearchCategory || product.category === selectedCategory;
  };
  
  export const filterBySearch = (product, searchQuery) => {
    const matchSearch = !searchQuery || product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSearch;
  };
  