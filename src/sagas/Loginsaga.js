import { getLoginFailure, getLoginSuccess } from "../ActionCreaters/Login";
import { put } from "redux-saga/effects"



export function* loginUser({ email, password }) {


    // const  LoginPost = {  email:action.body.email, password:action.body.password};
    try {

        const response = yield fetch(` http://localhost:4000/users/?email=${email}`)
        const [users] = yield response.json();

        if (users !== undefined) {
            if (users.email === email && users.password === password) {
                alert("successfully logged in");
                yield put(getLoginSuccess(users));
            } else if (users.password !== password) {
                alert("Please enter correct email or password")
            }
        } else {
            alert("you are not a valid user");
        }



    } catch (err) {

        yield put(getLoginFailure(err))
    }

}