import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import audioReducer from "./audio/audioSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["audio"],
};

const audioPersistedReducer = persistReducer(persistConfig, audioReducer);

const store = configureStore({
  reducer: {
    audio: audioPersistedReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

const persis_store = persistStore(store);

export default store;
export { persis_store };
