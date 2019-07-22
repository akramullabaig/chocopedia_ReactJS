import React, { Component } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

export default class Chocolatelistitems extends Component {

    render() {

        return (<>
            <div align="center">
                <h3><Link to={`/chocolatedetails/${this.props.id}`}>{this.props.name}</Link></h3>
                <img src={this.props.image} />
            </div>



        </>
        )
    }

}