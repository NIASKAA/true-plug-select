import {
  GET_USER_INFO,
  GET_ALL_PRODUCTS,
  ADD_AUCTION,
  ADD_TO_CART,
  GET_SOLD_PRODUCTS,
  UPDATE_USERNAME,
  UPDATE_SOLD_PRODUCTS
} from "./actions";

export const reducers = (state, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        auctions: action.payload,
      };

    case GET_USER_INFO:
      return {
        ...state,
        profileData: { ...action.payload },
      };

    case ADD_AUCTION:
      return {
        ...state,
        auctions: [...state.auctions, action.payload],
      };
    
      case UPDATE_USERNAME:
        return {
          ...state,
          profileData: {...action.payload},
        };
      
      case GET_SOLD_PRODUCTS:
        return {
          ...state,
          recentlySold: action.payload
        }
      case UPDATE_SOLD_PRODUCTS:
        return {
          ...state,
          recentlySold: [...state.recentlySold, action.payload]
        }
    default:
      return state;
  }
};
