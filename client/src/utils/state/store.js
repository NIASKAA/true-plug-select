import { createStore } from "redux";
import {GET_ALL_PRODUCTS} from '../state/actions'
import {reducers} from "./reducers";


const initialState = {
   recentBids: [],
   auctions: [],
   cart: [],
   cartOpen: false,
   categories: [],
   currentCategory: "",
};

export default createStore(reducers, initialState);
