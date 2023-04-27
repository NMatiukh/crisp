import {configureStore} from "@reduxjs/toolkit";

import {app, auth, db, firebaseConfig} from "../firebase/firebase";
import {createStore, combineReducers, compose} from 'redux'
import {
    ReactReduxFirebaseProvider,
    firebaseReducer,
} from 'react-redux-firebase'

import {createFirestoreInstance, firestoreReducer} from 'redux-firestore'
import firebase from "firebase/compat/app";
import productsReducer from "./reducer/productsReducer";
import shopReducer from "./reducer/shopReducer";
import loaderReducer from "./reducer/loaderReducer";



const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    enableClaims: true
};

const rootReducer = combineReducers({
    products: productsReducer,
    shopItems: shopReducer,
    loader: loaderReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true,
            serializableCheck: false, // Вимикаємо перевірку на серіалізованість
        }).concat(),
    devTools: process.env.NODE_ENV !== 'production', // Вимикаємо Redux DevTools у продакшн
})
export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};