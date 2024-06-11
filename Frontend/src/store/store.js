import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import  menuReducer  from '../features/MenuSlice'
import cartReducer from '../features/cartSlice'
import  authReducer from '../features/authSlice'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
  key : 'root',
  storage
}

const rootReducer = combineReducers({
  menu: menuReducer,
  cart: cartReducer,
  authentication: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
    },
  })
});

export const persistor = persistStore(store);

