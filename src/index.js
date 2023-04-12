import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import {RouterProvider} from "react-router-dom";
import {publicRoutes} from "./router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Provider store={store}>
            <RouterProvider router={publicRoutes} />
        </Provider>
    </>
);

