import { getSearchFailure, getSearchSuccess } from "../ActionCreaters/Search";
import {put} from "redux-saga/effects"
export function* searchChocolates(action){
    try{
 const chocoltaesdata= yield fetch(` http://localhost:4000/chocolates?q=${action.searchWord}`)   ;
 const searchdata=yield chocoltaesdata.json();
 console.log("Search data object",searchdata);
 
 yield put(getSearchSuccess(searchdata))
    }
    catch(err){
        yield put(getSearchFailure(err))
    }
}