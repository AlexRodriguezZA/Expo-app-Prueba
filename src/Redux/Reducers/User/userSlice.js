//Este estado global nos permite guardar el token, nombre e email del usuario
//para luego usarlos en toda aplicación y validar rutas
import { createSlice } from "@reduxjs/toolkit";



const UserInitialState = {
  token: "",
  email: "",
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: UserInitialState,
  reducers: {
    AuthUser: (state, action) => {
      const { token, email, username } = action.payload;
      state.token = token;
      state.email = email;
      state.username = username;
    },
    UnAuthUser: (state, action) => {
      state.token = "";
      state.email = "";
      state.username = "";
    },
  },
});

export const { AuthUser, UnAuthUser } = userSlice.actions;

export default userSlice.reducer;
