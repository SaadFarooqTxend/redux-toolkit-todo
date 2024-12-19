// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoReducer from '../features/todo/todoSlice'; // Adjust path as necessary

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
    reducer: {
        todo: persistedReducer, // Ensure this matches your slice name
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(), // Add any other middleware if needed
});

export const persistor = persistStore(store);
