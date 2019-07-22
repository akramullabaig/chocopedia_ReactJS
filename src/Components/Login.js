import React from "react"
import { changeValues, getLogin } from "../ActionCreaters/Login"
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux"
import Home from "./Home";
export function Login(props) {

  const handleChange = e => {
    console.log(props)
    props.dispatch(changeValues(e.target.name, e.target.value))
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(props);

    //const body= {props.firstname, props.lastname, props.email, props.password};

    props.dispatch(getLogin(props.email, props.password));
  }



  return (

    <>
      <h1 align="center" color="green">Chocolate</h1>
      <h3 align="center"></h3>
      <h3 align="center">is the answer, who cares what the question is !!</h3>
      <br /><br />
      <form onSubmit={handleSubmit}>
        <fieldset align="center">

          Email Add::  <input type="email" placeholder="email" name="email" onChange={handleChange} /><br></br>
          <br />
          Password ::<input type="password" placeholder="password" name="password" onChange={handleChange}></input>
          <br /><br />
          <button type="submit">Login</button>
          {props.isLogin && <Redirect to="/home" />}
        </fieldset>
      </form>

      <fieldset align="center" >
        <br />
        <Link to="/signup">Register</Link>
      </fieldset>
      {props.isLogin && <Redirect to="/home" />}
    </>

  )

}
function mapStateToProps(state) {
  return {

    email: state.email,
    password: state.password,
    isLogin: state.isLogin
  }
};

export default connect(mapStateToProps)(Login);