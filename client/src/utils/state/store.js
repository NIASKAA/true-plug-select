import { createStore } from "redux";
import {reducers} from "./reducers";


const initialState = {
   recentBids: [],
   profileData:{},
   auctions: [],
   recentlySold:[],
   cart: [],
   cartOpen: false,
   categories: [],
   currentCategory: "",
};

export default createStore(reducers, initialState);
