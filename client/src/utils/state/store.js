import { createStore } from "redux";

import {reducers} from "./reducers";

const initialState = {
   products: [],
   cart: [],
   cartOpen: false,
   categories: [],
   currentCategory: "",
};

export default createStore(reducers, initialState);
