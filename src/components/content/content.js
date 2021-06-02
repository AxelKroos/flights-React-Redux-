import React from "react";
import classes from './content.module.css'
import {connect} from "react-redux";
import Head from "./head/head";
import Body from "./body/body";
import Legs from "./legs/legs";
import {addIndexArr} from "../../store/actions/actions";

class Content extends React.Component {
    render() {

        for (let i = 0; i < this.props.data.length; i++) {
            let numBody = this.props.data[i].flight.legs[0].segments.length - 1
            let departureTimeBody = Date.parse(this.props.data[i].flight.legs[0].segments[0].departureDate) / 1000;
            let arrivalTimeBody = Date.parse(this.props.data[i].flight.legs[0].segments[numBody].arrivalDate) / 1000;
            let transferBody = this.props.data[i].flight.legs[0].segments.length

            let numLegs = this.props.data[i].flight.legs[1].segments.length - 1
            let departureTimeLegs = Date.parse(this.props.data[i].flight.legs[1].segments[0].departureDate) / 1000;
            let arrivalTimeLegs = Date.parse(this.props.data[i].flight.legs[1].segments[numLegs].arrivalDate) / 1000;
            let transferLegs = this.props.data[i].flight.legs[1].segments.length

            this.props.addIndexArr(arrivalTimeBody - departureTimeBody, arrivalTimeLegs - departureTimeLegs, transferBody, transferLegs, i)
        }

        const flights = this.props.prices.slice(0, this.props.quantityElemRender).map((fly, index) => {

            return <div className={classes.content}>
                <Head data={fly}/>
                <Body data={fly} index={index}/>
                <hr className={classes.hr}/>
                <Legs data={fly} index={index}/>
                <button>ВЫБРАТЬ</button>
            </div>
        })
        return flights
    }
}

function mapStateToProps(state) {
    return {
        data: state.reducer.data.result.flights,
        prices: state.reducer.prices,
        quantityElemRender: state.reducer.quantityElemRender
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addIndexArr: (valueBody, valueLegs, transferBody, transferLegs, index) => dispatch(addIndexArr(valueBody, valueLegs, transferBody, transferLegs, index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)