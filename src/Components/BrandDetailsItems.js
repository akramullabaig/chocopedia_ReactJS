import React from "react"
import { Component } from "react"
import { Link } from "react-router-dom"
import Home from "./Home";

export default class Branddetailslist extends Component {


    render() {

        return (

            <>

                {console.log(this.props)}

                <div align="center">
                    <h3><Link to={`/BrandDesc/${this.props.id}`}> {this.props.name} </Link></h3>
                    <img src={this.props.logo} />
                </div>

            </>

        )
    }
}
