import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showCart: false,
    items: [],
    totalQty: 0,
  },
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    addItem(state, action) {
      const data = action.payload;
      const existingData = state.items.find((item) => item.id === data.id);
      if (existingData) {
        existingData.quantity += 1;
      } else {
        state.items.push({ ...data, quantity: 1 });
      }
      state.totalQty += 1
    },

    removeItem(state, action) {
        const removedItemId = action.payload;
        const removedItemIndex = state.items.findIndex((item) => item.id === removedItemId);
      
        if (removedItemIndex !== -1) {
          state.totalQty -= state.items[removedItemIndex].quantity;
          state.items.splice(removedItemIndex, 1);
        }
      },

    updateQuantity(state, action) {
      const { dataId, newQuantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === dataId);

        if (itemToUpdate) {
            itemToUpdate.quantity = newQuantity;

        if (newQuantity === 0) {
          state.items = state.items.filter((item) => item.id !== dataId);
        }
      }
    },
  },
});

export const { toggleCart, addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
