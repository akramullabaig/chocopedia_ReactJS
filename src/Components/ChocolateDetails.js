import React, { Component } from "react"
import { getChocolates } from "../ActionCreaters/Chocolate"
import { connect } from "react-redux"
import Home from "./Home";
class Chocolatedetails extends Component {

    render() {

        // console.log(this.props.chocolates,this.props.match.params.id)

        const [chocolate] = this.props.chocolates.filter(choco =>
            choco.id == this.props.match.params.id
        )

        return (<>
            <Home />

            <div align="center">
                {/* <h1>Chocolatedetails-{this.props.match.params.id}</h1> */}
                <h3>{chocolate.name}</h3>
                <p>{chocolate.desc}</p>
                <img src={chocolate.image}   ></img>
            </div>

        </>
        )
    }
}

function MapStateToProps(state) {
    // console.log(state)
    return {
        chocolates: state.chocolates,
        isLoading: state.isLoading


    }
}
const connectedCom = connect(MapStateToProps)
export default connectedCom(Chocolatedetails)