import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./auth/auth-slice";
import producReducer from "./products/products-slice"
import bloodDietReducer from "./bloodDiet/bloodDiet-slice";
import themeReducer from "./theme/theme-slice"
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

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    product: producReducer,
    bloodDiet: bloodDietReducer,
    theme: themeReducer
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
