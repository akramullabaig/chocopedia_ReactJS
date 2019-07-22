import { signupPostSuccess, signupPostFailure } from "../ActionCreaters/Signup";
import {put} from "redux-saga/effects";

export function* signupPost(action){
    debugger;
    console.log(action);
    const postBody = { firstName:action.body.firstname, 
        lastName:action.body.lastname, email:action.body.email, password:action.body.password};
    try{
    const submitres=yield fetch(" http://localhost:4000/users",{
        method:"POST",
        body:JSON.stringify(postBody),
        headers:{
        "Content-Type": "application/json"
    }         
        })
       //const res= yield submitres.json(body)
       const postedRes = yield submitres.json();
       console.log(postedRes);
       yield put(signupPostSuccess(postedRes))
       alert("registered succesfully")
    }catch(err){
        yield put(signupPostFailure(err))
        alert("registration failed")
    }
  }

