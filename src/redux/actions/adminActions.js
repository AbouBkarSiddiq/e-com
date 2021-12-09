import axios from "axios";
import { GET_ALL_USERS, GET_ALL_CATEGORIES, GET_ALL_PRODUCTS, ADD_PRODUCT, ADD_CATEGORY, GET_TODO_DETAIL, DELETE_USER, DELETE_CATEGORY, DELETE_PRODUCT, CREATE_TODO, UPDATE_CATEGORY, GET_CATEGORY_DATA_TO_UPDATE } from "../constants/index";
// require('dotenv').config();

// const setIsFetchingTodos = (status) => {
//     return {
//         type: SET_IS_FETCHING_TODOS,
//         payload: status,
//     };
// };

export const getAllUsers = (userId, token) => async (dispatch) => {
  try {
    // dispatch(setIsFetchingTodos(true)); 

    // const config = {
    //     headers: { Authorization: `Bearer ${token}` }
    // };
    
    const res = await axios.get(`${process.env.REACT_APP_API_URL}user`)
    // const res = await axios.get(`${apiUrl}todo`)
    // const res = await axios.get(`${apiUrl}/todo?userId=${userId}`, config);

    // dispatch(setIsFetchingTodos(true));
    if (res.status === 200) {
        dispatch({
            type: GET_ALL_USERS,
            // isFetching: false,
            payload: res.data.data,
        });
    } else {
        // dispatch(setIsFetchingTodos(false));

    }
      
  } catch (error) {
    // dispatch(setIsFetchingTodos(false));
  }
    
}

export const getAllCategories = (userId, token) => async (dispatch) => {
    try {
      // dispatch(setIsFetchingTodos(true)); 
  
      // const config = {
      //     headers: { Authorization: `Bearer ${token}` }
      // };
      
      const res = await axios.get(`${process.env.REACT_APP_API_URL}category`)
      // const res = await axios.get(`${apiUrl}todo`)
      // const res = await axios.get(`${apiUrl}/todo?userId=${userId}`, config);
  
      // dispatch(setIsFetchingTodos(true));
      if (res.status === 200) {
          dispatch({
              type: GET_ALL_CATEGORIES,
              // isFetching: false,
              payload: res.data.data,
          });
      } else {
          // dispatch(setIsFetchingTodos(false));
  
      }
        
    } catch (error) {
      // dispatch(setIsFetchingTodos(false));
    }
      
  }

export const getTodoDetail = (id) => async (dispatch) => {
    console.log('Id for get todo detail:', id)
    const res = await axios.get(`${process.env.REACT_APP_API_URL}todo/${id}`);
    console.log('Get todo details action:', res)
    // const res = await axios.get(`${apiUrl}todo/${id}`);

    if (res.status === 200) {
        dispatch({
            type: GET_TODO_DETAIL,
            // isFetching: false,
            payload: res.data.data,
        });
    } else {

    }
}

export const deleteUser = (id) => async (dispatch) => {
    // console.log('history prop:', history);
    console.log('Id of user:', id)
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}user/${id}`);
    console.log('Response from api for user deletion:', res)
    // dispatch(setIsFetchingTodos(true));
    if (res.status === 200) {
        dispatch({
            type: DELETE_USER,
            // isFetching: false,
            payload: res.data.data
        });
        // history.push('/admin')
    } else {
    }
}

export const deleteCategory = (id) => async (dispatch) => {
    console.log('Id of category:', id)
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}category/${id}`);
    console.log('Response from api for user deletion:', res)
    // dispatch(setIsFetchingTodos(true));
    if (res.status === 200) {
        dispatch({
            type: DELETE_CATEGORY,
            // isFetching: false,
            payload: res.data.data
        });
    } else {
    }
}

export const addCategory = (formData) => async (dispatch) => {
    for (var pair of formData.entries()) {
        console.log('Log for form Data at actions:', pair[0]+ ' - ' + pair[1]); 
    }
    const headers = {
        'Content-Type': 'multipart/form-data'
    }
    const res = await axios.post(`${process.env.REACT_APP_API_URL}category`, formData, {headers});
    console.log('Response from api for newly created categroy:', res)

    if (res.status === 200) {
        dispatch({
            type: ADD_CATEGORY,
            // isFetching: false,
            payload: res.data.data,
        });
    } else {
    }
}

export const addProduct = (formData) => async (dispatch) => {
    for (var pair of formData.entries()) {
        console.log('Log for form Data at actions:', pair[0]+ ' - ' + pair[1]); 
    }
    
    const headers = {
        'Content-Type': 'multipart/form-data'
    }
    // const res = await axios.post('http://192.168.100.44:3002/product', formData, {headers});

    const res = await axios.post(`${process.env.REACT_APP_API_URL}product`, formData, {headers});
    console.log('Response from api for newly created product:', res)

    if (res.status === 200) {
        dispatch({
            type: ADD_PRODUCT,
            // isFetching: false,
            payload: res.data.data,
        });
    } else {
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    console.log('Id of category:', id)
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}product/${id}`);
    console.log('Response from api for user deletion:', res)
    // dispatch(setIsFetchingTodos(true));
    if (res.status === 200) {
        dispatch({
            type: DELETE_PRODUCT,
            // isFetching: false,
            payload: res.data.data
        });
    } else {
    }
}
export const getCategoryDataToUpdate = (id) => async (dispatch) => {

    const res = await axios.get(`${process.env.REACT_APP_API_URL}category/${id}`);

    console.log('Response from api for single todo to be update:', res)
    // dispatch(setIsFetchingTodos(true));
    if (res.status === 200) {
        dispatch({
            type: GET_CATEGORY_DATA_TO_UPDATE,
            // isFetching: false,
            payload: res.data.data
        });
    } else {
    }
}

export const updateCategory = (id, formData) => async (dispatch) => {
    // console.log('Own props of updateTodo:', ownProps);
    const headers = {
        'Content-Type': 'multipart/form-data'
      }
    const res = await axios.put(`${process.env.REACT_APP_API_URL}category/${id}`, formData, {headers});
    // dispatch(setIsFetchingTodos(true));
    if (res.status === 200) {
        dispatch({
            type: UPDATE_CATEGORY,
            // isFetching: false,
            payload: res.data.data
        });
        // history.push('/categories')
        // ownProps.history.push('/home')
    } else {
    }
}

export const getAllProducts = (userId, token) => async (dispatch) => {
    try {
      // dispatch(setIsFetchingTodos(true)); 
  
      // const config = {
      //     headers: { Authorization: `Bearer ${token}` }
      // };
      
      const res = await axios.get(`${process.env.REACT_APP_API_URL}product`)
      // const res = await axios.get(`${apiUrl}todo`)
      // const res = await axios.get(`${apiUrl}/todo?userId=${userId}`, config);
  
      // dispatch(setIsFetchingTodos(true));
      if (res.status === 200) {
          dispatch({
              type: GET_ALL_PRODUCTS,
              // isFetching: false,
              payload: res.data.data,
          });
      } else {
          // dispatch(setIsFetchingTodos(false));
  
      }
        
    } catch (error) {
      // dispatch(setIsFetchingTodos(false));
    }
      
  }