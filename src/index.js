import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider, useSelector} from "react-redux";
import {store, rrfProps} from "./redux/store";
import {RouterProvider} from "react-router-dom";
import {publicRoutes} from "./router";
import {isLoaded, ReactReduxFirebaseProvider} from "react-redux-firebase";

function AuthIsLoaded({children}) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div>splash screen...</div>;
    return children
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <AuthIsLoaded>
                    <RouterProvider router={publicRoutes}/>
                </AuthIsLoaded>
            </ReactReduxFirebaseProvider>

        </Provider>
    </>
);

