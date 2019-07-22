import produce from "immer";
import { GET_BRAND, GET_BRAND_SUCCESS, GET_BRAND_FAILURE } from "../ActionTypes/Brand";
import { GET_CHOCOLATES, GET_CHOCOLATES_SUCCESS, GET_CHOCOLATES_FAILURE } from "../ActionTypes/Chocolate";
import { CHANGE_INPUT, SIGNUP_POST, SIGNUP_POST_SUCCESS, SIGNUP_POST_FAILURE } from "../ActionTypes/Signup";
import { GET_LOGIN, GET_LOGIN_SUCCESS, CHANGE_VALUES } from "../ActionTypes/Login";
import { GET_SEARCH, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE, SEARCH_VALUES } from "../ActionTypes/Search";

export function rootReducer(prevState = {
    brands: [], chocolates: [], searchWord: "", searchChocolate: [],
    firstname: "", lastname: "", email: "", password: "", isLoading: false,
    isLogin: localStorage.getItem("login")
}, action) {
    return produce(prevState, draft => {
        switch (action.type) {
            case GET_BRAND:
                draft.isLoading = true;
                break;
            case GET_BRAND_SUCCESS:
                draft.isLoading = false;
                draft.brands = action.brands;
                break;
            case GET_BRAND_FAILURE:
                draft.isLoading = false;
                draft.brands = action.error;
                break;
            case GET_CHOCOLATES:
                draft.isLoading = true;
                break;
            case GET_CHOCOLATES_SUCCESS:
                draft.isLoading = false;
                draft.chocolates = action.chocolates;
                break;
            case GET_CHOCOLATES_FAILURE:
                draft.isLoading = false;
                draft.chocolates = action.chocolates;
                break;
            case CHANGE_INPUT:
                draft[action.fieldName] = action.fieldValue;
                break;
            case SIGNUP_POST:
                draft.body = action.body
                draft.isLoading = true;
                break;
            case SIGNUP_POST_SUCCESS:
                draft.user = action.user;
                draft.isLoading = false;
                break;
            case SIGNUP_POST_FAILURE:
                draft.isLoading = false;
                draft.error = action.error;
                break;
            case GET_LOGIN:
                draft.body = action.body
                draft.isLoading = true;
                break;
            case GET_LOGIN_SUCCESS:
                draft.email = action.email;
                draft.password = action.password;
                draft.isLoading = false;
                draft.isLogin = true;
                break;
            case SIGNUP_POST_FAILURE:
                draft.error = action.error
                draft.isLoading = false;
                //draft.isLogin.setItem("login", false);
                draft.isLogin = false;
                break;
            case CHANGE_VALUES:
                draft[action.fieldName] = action.fieldValue;

            case GET_SEARCH:
                draft.action = action.body;
                draft.isLoading = true;
                break;
            case GET_SEARCH_SUCCESS:
                draft.isLoading = false;
                draft.searchChocolates = action.search_success;
                break;
            case GET_SEARCH_FAILURE:
                draft.isLoading = false;
                draft.error = action.error;
                break;
            // case SEARCH_VALUES:
            //     draft.searchWord = action.fieldValue;
            //     break;
        }
    })
}