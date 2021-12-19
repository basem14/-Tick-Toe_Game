import AsyncStorage from '@react-native-async-storage/async-storage';
// .. redux setup .. //
import reducerContanier from './reducer.contanier';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk';
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import { persistStore, persistReducer } from "redux-persist";
// import * as SecureStore from 'expo-secure-store';
import promiseMiddleware from "redux-promise";

const persistConfig = {
    key: `bidMe-v1.0.0`,
    storage: AsyncStorage,
    stateReconciler: hardSet
};
const persistedReducer = persistReducer(persistConfig, reducerContanier);

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(promiseMiddleware, thunk))
);
const persistor = persistStore(store);

export {
    store,
    persistor
};