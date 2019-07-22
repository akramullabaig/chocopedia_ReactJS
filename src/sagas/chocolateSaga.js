import { getChocolatesSuccess, getChocolatesFailure } from "../ActionCreaters/Chocolate";
import { put } from "redux-saga/effects";


export function* getChocolates() {
    try {
        const chocolateResponse = yield fetch(`http://localhost:4000/chocolates`);
        const chocolates = yield chocolateResponse.json();
        yield put(getChocolatesSuccess(chocolates));
    } catch (err) {
        yield put(getChocolatesFailure(err));
    }
}