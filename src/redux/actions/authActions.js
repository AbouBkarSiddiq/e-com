import axios from "axios";
import { LOGIN, LOGIN_LOADING } from "../constants";
require('dotenv').config();

export const login = (data, history) => dispatch => {
    console.log('History passed from login page:::', history);
    dispatch({ type: LOGIN_LOADING, payload: true });
    // console.log('React app api url', process.env.REACT_APP_API_URL)
    axios.post(`${process.env.REACT_APP_API_URL}user/login`, data)
    .then(response => {
            // console.log("Response login for token: ", response)
            localStorage.setItem('userId', response.data.data._id);
            localStorage.setItem('email', response.data.data.email);
            if(response.status === 200) {
                dispatch({
                    type: LOGIN,
                    payload: response.data.data
                })
                history.push('/admin')
            } 
        })
        .catch(error => {
            console.log(error)
            // alert('Error while logging in!')
            dispatch({ type: LOGIN_LOADING, payload: false });
        })
}


