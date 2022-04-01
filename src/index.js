import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/index";
import {prodFetch} from './store/sliceProducts'
import { getTotalCart } from "./store/cartSlice";



store.dispatch(prodFetch())
store.dispatch(getTotalCart())

ReactDOM.render(
 
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById("root")
);
