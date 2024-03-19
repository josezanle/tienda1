import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0, // Nuevo estado para almacenar el total del carrito
    },
    reducers: {
        addProductToCart: (state, action) => {
            const newItem = action.payload;
            const index = state.items.findIndex(item => item.id === newItem.id);
            if (index !== -1) {
                // Si el producto ya está en el carrito, incrementa su cantidad
                state.items[index].quantity += newItem.quantity;
            } else {
                // Si es un producto nuevo, agrégalo al carrito
                state.items.push(newItem);
            }
            // Suma el precio del nuevo producto multiplicado por su cantidad al total del carrito
            state.total += newItem.price * newItem.quantity;
        },
        clearCart: state => {
            state.items = []; // Limpiar el carrito borrando todos los productos
            state.total = 0; // Reiniciar el total del carrito
        },
        removeProductFromCart: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                const removedItem = state.items.splice(index, 1)[0]; // Eliminar el producto del carrito por su índice
                state.total -= removedItem.price * removedItem.quantity; // Restar el precio total del producto del total del carrito
            }
        },
    },
});

export const { addProductToCart, removeProductFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

// Función para obtener el total del carrito
export const selectCartTotal = state => state.cart.total;
