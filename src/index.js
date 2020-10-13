import React from "react";
import ReactDOM from "react-dom";
//import AppRoute from "./AppRoute";
//import MovieApp from "./KoolKanya/MovieApp";
import AppRoute from "./KoolKanya/AppRoute";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import movieReducer from './KoolKanya/reducers/movieReducer'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

const rootElement = document.getElementById("root");
var store = createStore(movieReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoute />
    </Provider>
  </React.StrictMode>,
  rootElement
);
