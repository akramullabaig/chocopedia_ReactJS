import { GET_SEARCH, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE, SEARCH_VALUES } from "../ActionTypes/Search";

export function getSearch(searchWord){
    return{
        type:GET_SEARCH,searchWord
    }
}

export function getSearchSuccess(search_success){
    return{
        type:GET_SEARCH_SUCCESS,search_success
    }
}

export function getSearchFailure(fail){
    return{
        type:GET_SEARCH_FAILURE,fail
    }
}
export function searchValues(fieldValue){
    return{type:SEARCH_VALUES,fieldValue}
}