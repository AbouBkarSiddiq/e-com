import { GET_ALL_USERS, GET_TODO_DETAIL, DELETE_USER, CREATE_TODO, GET_TODO_DATA_TO_UPDATE, UPDATE_TODO } from "../constants/index";

const initialState = {
  users: [],
  isFetching: false,
  user:{}
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_IS_FETCHING_TODOS:
    //   return {
    //     ...state,
    //     isFetching: action.payload,
    //   };
      
      case GET_ALL_USERS:
        // console.log('data at reducer:', state)
        return {
        ...state,
        isFetching: false,
        users: action.payload,
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
      case CREATE_TODO:
        return {
        ...state,
        isFetching: false,
        todo: action.payload,
      };
      case GET_TODO_DATA_TO_UPDATE:
        return {
        ...state,
        isFetching: false,
        todo: action.payload,
      };
      case UPDATE_TODO:
        return {
        ...state,
        isFetching: false,
        todo: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;