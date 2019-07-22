
import React, { Component } from "react";
import { getChocolates } from "../ActionCreaters/Chocolate";
import { connect } from "react-redux";
import Chocolatelistitems from "./Chocolatelistitems"
import Home from "./Home";

class chocolateslist extends Component {

    componentDidMount() {
        this.props.dispatch(getChocolates());
    }

    render() {
        return (
            <>
                <Home />
                <div align="center">
                    {this.props.chocolates.map(p => (
                        <Chocolatelistitems {...p} />
                    ))}
                </div>
            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        chocolates: state.chocolates,
        isLoading: state.isLoading
    };
}
export default connect(mapStateToProps)(chocolateslist);