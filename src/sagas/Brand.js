import { getBrandSuccess, getBrandFailure } from "../ActionCreaters/Brand";
import {put} from "redux-saga/effects";


export function* getBrands(){
    try{
const brandResponse=yield fetch(`http://localhost:4000/brands`);

const brands=yield brandResponse.json();
yield put(getBrandSuccess(brands));
} catch(err){
    yield put(getBrandFailure(err));
}}