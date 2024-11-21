import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import cartReducer from '../Features/AddcartSlice';

// Persist configuration for the cart reducer
const persistConfig = {
  key: 'cart',
  storage,
};

// Wrap cartReducer with persistReducer
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
  },
});

// Create the persistor
export const persistor = persistStore(store);


