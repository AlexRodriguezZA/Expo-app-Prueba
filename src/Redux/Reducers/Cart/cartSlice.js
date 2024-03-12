import { createSlice } from "@reduxjs/toolkit";

const CartInitialState = {
  totalProductsCart: 0, //Cantidad de productos del carrito
  ListProducts: [], //Ingresar un objeto producto con sus datos
  totalPriceCart: 0, //Cantidad $$ que te sale la compra
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CartInitialState,
  reducers: {
    addProductCart: (state, action) => {
      //Verificamos si el producto está cargado
      //Si ya se encuentra lo que hacemos es actualizar la cantidad de dicho producto
      const productIsLoadIndex = state.ListProducts.findIndex((prod) => prod.id === action.payload.id);

      if (productIsLoadIndex !== -1) {
          // Si ya se encuentra, actualizamos la cantidad de dicho producto
          const updatedProducts = [...state.ListProducts];
          updatedProducts[productIsLoadIndex].totalProd += action.payload.totalProd;
          state.ListProducts = updatedProducts;  
      }
      //Si no está cargado lo que hacemos el cargar uno nuevo
      else {
        state.ListProducts = [...state.ListProducts, action.payload];
      }
      // Calculamos el total del precio y la cantidad total de productos
      state.totalPriceCart = state.ListProducts.reduce((accum, product) => accum + (product.price * product.totalProd), 0);
      state.totalProductsCart = state.ListProducts.reduce((accum, product) => accum + product.totalProd, 0);
    },
    deleteProducto: (state, action) => {
      const id = action.payload;
      state.ListProducts = state.ListProducts.filter((prod) => id !== prod.id);
      state.totalPriceCart = state.ListProducts.reduce((accum, product) => accum + (product.price * product.totalProd), 0);
      state.totalProductsCart = state.ListProducts.reduce((accum, product) => accum + product.totalProd, 0);
    },

    
   
    
  },
});

export const { addProductCart, deleteProducto, addQuantity, deleteQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
