import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newitem = action.payload;
      const existingItem = state.items.find((item) => item.id === newitem.id);
      if (!existingItem) {
        state.items.push({
          itemId: newitem.id,
          price: newitem.price,
          qualtity: 1,
          totalPrice: newitem.price,
          name: newitem.title,
        });
      } else {
        existingItem.quaity += 1;
        existingItem.totalPrice += newitem.price;
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingitem = state.items.find((item) => item.id === id);
      if (existingitem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingitem.quantity--;
        existingitem.price = existingitem.totalPrice - existingitem.price;
      }
    },
  },
});


export const cartActions = cartSlice.actions;
export default cartSlice;  