import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showCart:false,
        items: [],
        totalQty : 0,
    },
    reducers: {
        toggleCart(state){
            state.showCart = !state.showCart
        },
        addItem(state,action){
            const data = action.payload;
            state.items.push(data)
        },
        removeItem(state,action){
            const removedata = action.payload
            state.items = state.items.filter(item => item.id !== removedata)
        }

    }
})

export const { toggleCart,addItem,removeItem } = cartSlice.actions
export default cartSlice.reducer ;