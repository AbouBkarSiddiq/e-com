import { GET_ALL_USERS, GET_ALL_CATEGORIES, GET_ALL_PRODUCTS, ADD_PRODUCT, ADD_CATEGORY, GET_TODO_DETAIL, DELETE_USER, CREATE_TODO, GET_CATEGORY_DATA_TO_UPDATE, GET_PRODUCT_DATA_TO_UPDATE, UPDATE_CATEGORY, UPDATE_PRODUCT, SET_IS_FETCHING } from "../constants/index";

const initialState = {
  users: [],
  user:{},
  categories: [],
  category: {},
  products: [],
  product: {},
  isFetching: false,
};

const adminReducer = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
      case GET_ALL_USERS:
        // console.log('data at reducer:', state)
        return {
        ...state,
        isFetching: false,
        users: action.payload,
      };

      case GET_ALL_CATEGORIES:
        // console.log('data at reducer:', state)
        return {
        ...state,
        isFetching: false,
        categories: action.payload,
      };
      case GET_ALL_PRODUCTS:
        // console.log('data at reducer:', state)
        return {
        ...state,
        isFetching: false,
        products: action.payload,
      };
      case GET_PRODUCT_DATA_TO_UPDATE:
        return {
        ...state,
        isFetching: false,
        product: action.payload,
      };
      case UPDATE_PRODUCT:
        return {
        ...state,
        isFetching: false,
        product: action.payload,
      };
      case GET_TODO_DETAIL:
        console.log('data at reducer:', action.payload)
        return {
        ...state,
        isFetching: false,
        todo: action.payload,
      };

      case DELETE_USER:
        return {
        ...state,
        isFetching: false,
        user: action.payload,
      };
      case ADD_CATEGORY:
        return {
        ...state,
        isFetching: false,
        category: action.payload,
      };
      case ADD_PRODUCT:
        return {
        // ...state,
        isFetching: false,
        product: action.payload,
      };
      case GET_CATEGORY_DATA_TO_UPDATE:
        return {
        ...state,
        isFetching: false,
        category: action.payload,
      };
      case UPDATE_CATEGORY:
        return {
        ...state,
        isFetching: false,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;