import React, { Component } from "react";
import { getSearch } from "../ActionCreaters/Search";
import { connect } from "react-redux"
import { searchValues } from "../ActionCreaters/Search"
import Chocolatelistitems from "./Chocolatelistitems";
import { getBrand } from "../ActionCreaters/Brand";
import { getChocolates } from "../ActionCreaters/Chocolate";
import Home from "./Home";
class Search extends Component {


    componentDidMount() {
        //  this.props.dispatch(getBrand(), []);
        this.props.dispatch(getChocolates());
    }


    render() {
        return (
            <>
                <Home />
                {this.props.searchChocolates !== undefined &&
                    <> {console.log("Hi")}
                        {this.props.searchChocolates.map(s => (
                            <li><Chocolatelistitems {...s} /></li>))}</>
                }

            </>

        )

    }
}
function mapStateToProps(state) {


    return {
        searchChocolates: state.searchChocolates,
        searchWord: state.searchWord,
    }
}

export default connect(mapStateToProps)(Search)