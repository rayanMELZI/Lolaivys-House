import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addProduct: (state) => {
      //   state.value += 1;
      //
      //hna nkteb logic ta3ha🛠️
    },
    deleteProduct: (state) => {
      //   state.value -= 1;
      //
      //hna nkteb logic ta3ha🛠️
    },
    increaseQuantity: (state, action) => {
      //   state.value += action.payload;
      //
      //hna nkteb logic ta3ha🛠️
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
