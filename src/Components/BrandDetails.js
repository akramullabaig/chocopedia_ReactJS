
import React, { Component } from "react";
import { getBrand } from "../ActionCreaters/Brand";
import { connect } from "react-redux";
import { useEffect } from "react";
import Branddetailslist from "./BrandDetailsItems"
import { getChocolates } from "../ActionCreaters/Chocolate"
import Home from "./Home";
class Branddetails extends Component {
    componentDidMount() {
        this.props.dispatch(getBrand(), []);
        this.props.dispatch(getChocolates())
    }


    render() {
        return (
            <>
                <Home />
                {/* <h1> </h1> */}

                {console.log(this.props)}

                {this.props.brands.map(p => (

                    <Branddetailslist {...p} />

                ))}
                {this.props.chocolates.map(p => (

                    <Branddetailslist {...p} />

                ))}

            </>

        )
    }
}

function MapStateToProps(state) {
    { console.log(state) }
    return {

        brands: state.brands,
        isLoading: state.isLoading,
        chocolates: state.chocolates
    }
}
export default connect(MapStateToProps)(Branddetails);