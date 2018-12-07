//import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
//import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import {loadCourses} from './actions/courseActions';
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();
store.dispatch(loadCourses());
render(
    <Provider store={store}>
    
        <AppRoutes />

    </Provider>,
    document.getElementById('root')
);
