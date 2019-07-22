import React from "react";
import BrandList from "./BrandDetails"
import { Link } from "react-router-dom";
import { getSearch, searchValues } from "../ActionCreaters/Search";
import { statement } from "@babel/template";
import { connect } from "react-redux"

function Home(props) {



  return (
    <>

      <div className="bg-info text-light p-3 ">
        <label><h3>Chocolate Collection</h3></label>
        <label className="ml-4 "><Link to="/home" className="text-light">Home</Link></label>
        <label className="ml-4"><Link to="/brands" className="text-light">Brands</Link> </label>
        <label className="ml-4"><Link to="/chocolates" className="text-light">Chocolates</Link> </label>
        {/* <label className="ml-2"><Link to="/login" className="text-light">Login</Link> </label> */}
        <label class="mrl"><Link to="/search"><input type="text" placeholder="search.." onChange={e => {

          props.dispatch(getSearch(e.target.value))
        }}></input></Link></label>


      </div>


      <h1 class="cen">Welcome To Chocolate Collection</h1>
      <h3 class="ch">Chocolate collection is a crowed sourced portal which
           gives you details about world renowned brands and chocolates</h3>


    </>

  )
}

function mapStateToProps(state) {
  return {
    searchword: state.searchword,
  }
}
export default connect(mapStateToProps)(Home)


