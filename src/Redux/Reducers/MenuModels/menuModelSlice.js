//Este estado global nos permite guardar los menú que nos llegan desde la api
//cuando nos logueamos, para luego poder trabajarlos en el homeScreen y crear
//el respectivo menú.

import { createSlice } from "@reduxjs/toolkit";

const menuModelsInitialState = {
  listModels: [],
};

export const menuModelSlice = createSlice({
  name: "menu",
  initialState: menuModelsInitialState,
  reducers: {
    addMenuModel: (state, action) => {
      state.listModels = action.payload; 

    },
  },
});


export const { addMenuModel } = menuModelSlice.actions;

export default menuModelSlice.reducer;
