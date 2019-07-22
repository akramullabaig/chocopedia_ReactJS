
import { SIGNUP_POST_FAILURE, SIGNUP_POST_SUCCESS, SIGNUP_POST, CHANGE_INPUT } from "../ActionTypes/Signup";

export function signupPost(body){
    return {type:SIGNUP_POST,body}
}

export  function signupPostSuccess(user){
    return{type:SIGNUP_POST_SUCCESS,user}
}

export  function signupPostFailure(error)
{
    return{type:SIGNUP_POST_FAILURE,error}
}

export function changeInput(fieldName,fieldValue){
    return{type:CHANGE_INPUT,fieldName,fieldValue}
}