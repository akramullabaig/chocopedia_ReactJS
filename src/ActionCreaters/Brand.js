import {GET_BRAND,GET_BRAND_FAILURE,GET_BRAND_SUCCESS} from "../ActionTypes/Brand"
export function getBrand(){
    return {type:GET_BRAND}
}

export function getBrandSuccess(brands){
    return{type:GET_BRAND_SUCCESS,brands}
}

export function getBrandFailure(errors){
    return{type:GET_BRAND_FAILURE,errors}
}

