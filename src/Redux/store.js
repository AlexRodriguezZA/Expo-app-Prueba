import { configureStore } from "@reduxjs/toolkit";

//Reducers
import userReducer from "../Redux/Reducers/User/userSlice";
import menuModelReducer from "../Redux/Reducers/MenuModels/menuModelSlice";
import cartReducer from "./Reducers/Cart/cartSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    menuModel: menuModelReducer,
    cart: cartReducer
  },
});
