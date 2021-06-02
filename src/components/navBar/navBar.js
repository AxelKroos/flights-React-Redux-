import React from "react";
import classes from './navBar.module.css'
import {connect} from "react-redux";
import AscendingSort from "./ascending filter/ascendingFilter";
import TransferFilter from "./transferFilter/transferFilter";
import Price from "./price/price";
import Airlines from "./airlines/airlines";
import {clickAscendingOrder, changeInput, filterAirlines} from "../../store/actions/actions";

class NavBar extends React.Component {
    render() {
        return <div className={classes.navBar}>
            <AscendingSort clickAscendingOrder={this.props.clickAscendingOrder} price={+this.props.data[0].flight.price.passengerPrices[0].feeAndTaxes.amount}/>
            <TransferFilter clickAscendingOrder={this.props.clickAscendingOrder}/>
            <Price inputValueStart={this.props.inputValueStart} inputValueEnd={this.props.inputValueEnd} changeInput={this.props.changeInput}/>
            {/*<Airlines data={this.props.data} filterAirlines={this.props.filterAirlines}/>*/}
        </div>
    }
}

function mapStateToPrors(state) {
    return {
        data: state.reducer.data.result.flights,
        inputValueStart: state.reducer.inputValueStart,
        inputValueEnd: state.reducer.inputValueEnd
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clickAscendingOrder: (value, price) => dispatch(clickAscendingOrder(value, price)),
        changeInput: (value, num) => dispatch(changeInput(value, num)),
        filterAirlines: (value) => dispatch(filterAirlines(value))
    }
}

export default connect(mapStateToPrors, mapDispatchToProps)(NavBar)