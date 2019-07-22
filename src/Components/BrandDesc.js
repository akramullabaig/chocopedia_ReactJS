import React, { Component } from "react"
import { connect } from "react-redux"
import Chocolatelistitems from "./Chocolatelistitems";
import Home from "./Home";

class BrandDesc extends Component {



    render() {

        //{ console.log( <h1>Chocolatedetails-{this.props.match.params.id}</h1>)}
        console.log(this.props.match.params.id)
        const [brand] = this.props.brands.filter(b =>
            b.id == this.props.match.params.id
        )

        const chocolate = this.props.chocolates.filter(c =>
            c.brandId == this.props.match.params.id
        )

        return (<>
            <Home />

            {/* {console.log(brand)} */}
            {/* <h1>Chocolatedetails-{this.props.match.params.id}</h1> */}
            <div align="center">
                <h3>{brand.name}</h3>
                <p>{brand.desc}</p>
                <img src={brand.logo}></img>
            </div>
            {chocolate.map(p => (
                <Chocolatelistitems {...p} />
            ))}</>
        )
    }

}

function MapStateToProps(state) {
    //console.log(state)
    return {
        brands: state.brands,
        isLoading: state.isLoading,
        chocolates: state.chocolates,

    }
}

export default connect(MapStateToProps)(BrandDesc);