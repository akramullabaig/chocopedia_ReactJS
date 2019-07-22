import { GET_CHOCOLATES, GET_CHOCOLATES_SUCCESS, GET_CHOCOLATES_FAILURE } from "../ActionTypes/Chocolate";
export  function getChocolates(){
    return {type: GET_CHOCOLATES};
}
export function getChocolatesSuccess(chocolates){
    return{type: GET_CHOCOLATES_SUCCESS, chocolates};
}

export function getChocolatesFailure(errors){
    return{type: GET_CHOCOLATES_FAILURE, errors};
}

