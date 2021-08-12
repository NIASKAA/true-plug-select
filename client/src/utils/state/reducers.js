import {
  GET_USER_INFO,
  GET_ALL_PRODUCTS,
  ADD_AUCTION,
  UPDATE_USERNAME
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
        
    default:
      return state;
  }
};
