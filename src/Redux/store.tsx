import { configureStore, combineReducers } from "@reduxjs/toolkit";
import FiltersKit from "./FiltersSlice";
import ProductSlice from "./ProductSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export type RootState = ReturnType<typeof store.getState>
// export const selectFilters = (state:RootState) => state.filters.filterr;

const rootReducer = combineReducers({
    filters: FiltersKit,
    products: ProductSlice
})

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // reducer:{
    //     filters: FiltersKit,
    //     products: ProductSlice
    // }
})
export const persistor = persistStore(store)
export default store

