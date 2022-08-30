// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { conmposeWithDevTools} from "redux-devtools-extension"

// const reducer = combineReducers({

// })

// const middleware = [thunk]; //helps call asyncrnous funcitons

// const store = createStore(
//     reducer,
//     conmposeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductsReducer,
  getOneProductReducer,
} from "./reducers/productReducers";
import userReducer from "./reducers/userReducers";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);
const persistedReducerCart = persistReducer(persistConfig, cartReducer);

const reducer = combineReducers({
  cart: persistedReducerCart,
  getProducts: getProductsReducer,
  getOneProduct: getOneProductReducer,
  user: persistedReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export default store;
