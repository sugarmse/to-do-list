import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../state/TodoSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//define persist config
const persistConfig = {
  key : 'root',
  storage,
};
//create a persisted reducer
const persistedReducer = persistReducer(persistConfig, todoReducer);
//redux store
const store = configureStore({
  reducer: persistedReducer,
});
//peersistor
const persistor = persistStore(store);
export{store,persistor};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;