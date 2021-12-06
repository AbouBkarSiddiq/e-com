import { LOGIN, FETCH_USER, FETCH_LOADING, LOGIN_LOADING, REGISTER, REGISTER_LOADING } from "../constants";

const initState = {
    user: null,
    isFetchingUser: true,
    isLoading: false,
}

export default function authReducer(state=initState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
            };
        
            case FETCH_USER:
                return {
                    ...state,
                    user: action.payload,
                    isFetchingUser: false,
                };

            case FETCH_LOADING:
                return {
                    ...state,
                    isFetchingUser: action.payload
                };
    
        case LOGIN_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }

            case REGISTER:
                return {
                    ...state,
                    user: action.payload,
                    isLoading: false,
                };
        
            case REGISTER_LOADING:
                return {
                    ...state,
                    isLoading: action.payload
                }
            // break;
        

        default:
            return state;
    }
}