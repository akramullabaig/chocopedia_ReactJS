import React from "react"
import { signupPost } from "../ActionCreaters/Signup"
import { connect } from "react-redux"
import { changeInput } from "../ActionCreaters/Signup"
import { Link } from "react-router-dom"
function Signup(props) {

  const handleChange = e => {
    console.log(e.target.value)
    props.dispatch(changeInput(e.target.name, e.target.value))
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(props);
    debugger;
    //const body= {props.firstname, props.lastname, props.email, props.password};
    props.dispatch(signupPost(props));
  }
  return (
    <>
      <h1 align="center" color="green">Chocolate</h1>
      <h3 align="center">is the answer, who cares what the question is !!</h3>
      <h3 align="center"></h3> <br /><br />
      <form onSubmit={handleSubmit}>
        <fieldset align="center" border="1">
          FirstName::<input type="text" placeholder="firstname" name="firstname" value={props.firstname} onChange={handleChange} required />
          <br /><br />
          LastName ::<input type="text" placeholder="lastname" name="lastname" value={props.lastname} onChange={handleChange} required />
          <br /><br />
          Email Add::<input type="email" placeholder="email" name="email" value={props.email} onChange={handleChange} required />
          <br /><br />
          Password::<input type="Password" placeholder="password" name="password" value={props.password} onChange={handleChange} required />
          <br /><br />
          <button type="submit" >submit</button>

        </fieldset>

      </form>
      <fieldset align="center">
        <br />
        <Link to="/">LOGIN</Link>
      </fieldset>

    </>
  )
}
function mapStateToProps(state) {
  return {
    firstname: state.firstname,
    lastname: state.lastname,
    email: state.email,
    password: state.password
  }
};

export default connect(mapStateToProps)(Signup);