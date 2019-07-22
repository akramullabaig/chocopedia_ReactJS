import { takeLatest, all } from "redux-saga/effects"
import { GET_BRAND } from "../ActionTypes/Brand";
import { getBrands } from "../sagas/Brand";
import { getChocolates } from "../sagas/chocolateSaga"
import { GET_CHOCOLATES } from "../ActionTypes/Chocolate";
import { SIGNUP_POST } from "../ActionTypes/Signup";
import { signupPost } from "./Signupsags";
import { GET_LOGIN } from "../ActionTypes/Login";
import { loginUser } from "./Loginsaga";
import { GET_SEARCH } from "../ActionTypes/Search";
import { searchChocolates } from "../sagas/Search";

export function* brandWatcher() {
    yield all([takeLatest(GET_BRAND, getBrands), takeLatest(GET_CHOCOLATES, getChocolates),
    takeLatest(SIGNUP_POST, signupPost), takeLatest(GET_LOGIN, loginUser), takeLatest(GET_SEARCH, searchChocolates)]);
}