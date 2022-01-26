import axios from "axios";
import { GET_ALL_USERS, GET_ALL_CATEGORIES, GET_ALL_PRODUCTS, ADD_PRODUCT, ADD_CATEGORY, DELETE_USER, DELETE_CATEGORY, DELETE_PRODUCT, UPDATE_CATEGORY, GET_CATEGORY_DATA_TO_UPDATE, GET_PRODUCT_DATA_TO_UPDATE, UPDATE_PRODUCT, SET_IS_FETCHING } from "../constants/index";
// require('dotenv').config();

const setIsFetching = (status) => {
  return {
    type: SET_IS_FETCHING,
    payload: status,
  };
};

export const getAllUsers = (userId, token) => async (dispatch) => {
  try {
    dispatch(setIsFetching(true));

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
        isFetching: false,
        payload: res.data.data,
      });
    } else {
      dispatch(setIsFetching(false));

    }

  } catch (error) {
    dispatch(setIsFetching(false));
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

export const getAllCategories = (userId, token) => async (dispatch) => {
  try {
    dispatch(setIsFetching(true));

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
        isFetching: false,
        payload: res.data.data,
      });
    } else {
      // dispatch(setIsFetchingTodos(false));

    }

  } catch (error) {
    // dispatch(setIsFetchingTodos(false));
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

export const addCategory = (formData, history) => async (dispatch) => {
  // console.log('history object:', history);
  try {
    dispatch(setIsFetching(true));
    for (var pair of formData.entries()) {
      console.log('Log for form Data at actions:', pair[0] + ' - ' + pair[1]);
    }
    const headers = {
      'Content-Type': 'multipart/form-data'
    }
    // const res = await axios.post(`http://192.168.100.44:3002/category`, formData, { headers });
    const res = await axios.post(`${process.env.REACT_APP_API_URL}category`, formData, { headers });
    console.log('Response from api for newly created categroy:', res)

    if (res.status === 200) {
      dispatch({
        type: ADD_CATEGORY,
        isFetching: false,
        payload: res.data.data,
      });
      history.push('/all-categories')
    } else {
      dispatch(setIsFetching(false));
    }
  } catch (error) {
    dispatch(setIsFetching(false));
  }
}

export const getCategoryDataToUpdate = (id) => async (dispatch) => {
  try {
    dispatch(setIsFetching(true));
    const res = await axios.get(`${process.env.REACT_APP_API_URL}category/${id}`);
    console.log('Response from api for single category to update:', res)
    // dispatch(setIsFetchingTodos(true));
    if (res.status === 200) {
      dispatch({
        type: GET_CATEGORY_DATA_TO_UPDATE,
        isFetching: false,
        payload: res.data.data
      });
    } else {
    }
  } catch (error) {
    // dispatch(setIsFetchingTodos(false));
  }
}

export const updateCategory = (id, formData, history) => async (dispatch) => {
  console.log('History object:', history);
  try {
    dispatch(setIsFetching(true));
    const headers = {
      'Content-Type': 'multipart/form-data'
    }
    // const res = await axios.post(`http://192.168.100.44:3002/category/${id}`, formData, { headers });
    const res = await axios.put(`${process.env.REACT_APP_API_URL}category/${id}`, formData, { headers });
    // dispatch(setIsFetchingTodos(true));
    if (res.status === 200) {
      dispatch({
        type: UPDATE_CATEGORY,
        isFetching: false,
        payload: res.data.data
      });
      history.push('/all-categories')
      // ownProps.history.push('/home')
    } else {
      dispatch(setIsFetching(false));
    }
  }
  catch (error) {
    dispatch(setIsFetching(false));
  }
}

export const getAllProducts = (userId, token) => async (dispatch) => {
  try {
    dispatch(setIsFetching(true));

    // const config = {
    //     headers: { Authorization: `Bearer ${token}` }
    // };
    // const res = await axios.get('http://192.168.100.44:3002/product');

    const res = await axios.get(`${process.env.REACT_APP_API_URL}product`)
    // const res = await axios.get(`${apiUrl}todo`)
    // const res = await axios.get(`${apiUrl}/todo?userId=${userId}`, config);

    // dispatch(setIsFetchingTodos(true));
    if (res.status === 200) {
      dispatch({
        type: GET_ALL_PRODUCTS,
        isFetching: false,
        payload: res.data.data,
      });
    } else {
      // dispatch(setIsFetchingTodos(false));

    }

  } catch (error) {
    // dispatch(setIsFetchingTodos(false));
  }

}

export const deleteProduct = (id, history) => async (dispatch) => {
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
    history.push('all-products')

  } else {
  }
}

export const addProduct = (formData, history) => async (dispatch) => {
  try {
    dispatch(setIsFetching(true));
    console.log('History object:', history)
    for (var pair of formData.entries()) {
      console.log('Log for form Data at actions:', pair[0] + ' - ' + pair[1]);
    }

    const headers = {
      'Content-Type': 'multipart/form-data'
    }

    // const res = await axios.post('http://192.168.100.44:3002/product', formData, {headers});
    const res = await axios.post(`${process.env.REACT_APP_API_URL}product`, formData, { headers });
    if (res.status === 200) {
      dispatch({
        type: ADD_PRODUCT,
        isFetching: false,
        payload: res.data.data,
      });
      history.push('all-products')
    } else {
      dispatch(setIsFetching(false));
    }
  } catch (error) {
    dispatch(setIsFetching(false));

  }
}

export const getProductDataToUpdate = (id) => async (dispatch) => {
  try {
    dispatch(setIsFetching(true));
    const res = await axios.get(`${process.env.REACT_APP_API_URL}product/${id}`);
    // const res = await axios.get(`http://192.168.100.44:3002/product/${id}`);
    console.log('Response from api for single todo to be update:', res)
    // dispatch(setIsFetchingTodos(true));
    if (res.status === 200) {
      dispatch({
        type: GET_PRODUCT_DATA_TO_UPDATE,
        // isFetching: false,
        payload: res.data.data
      });
    } else {
    }
  } catch (error) {
    // dispatch(setIsFetchingTodos(false));
  }
}

export const updateProduct = (id, formData, history) => async (dispatch) => {
  console.log('History prop:', history);
  try {
    dispatch(setIsFetching(true));

    const headers = {
      'Content-Type': 'multipart/form-data'
    }

    // const res = await axios.put(`http://192.168.100.44:3002/product${id}`, formData, {headers});
    const res = await axios.put(`${process.env.REACT_APP_API_URL}product/${id}`, formData, { headers });
    console.log("Response for edit product:::", res)
    // dispatch(setIsFetchingTodos(true));
    if (res.status === 200) {
      dispatch({
        type: UPDATE_PRODUCT,
        isFetching: false,
        payload: res.data.data
      });
      history.push('/all-products')
      // ownProps.history.push('/home')
    } else {
      dispatch(setIsFetching(false));
    }

  } catch (error) {
    dispatch(setIsFetching(false));
  }

}