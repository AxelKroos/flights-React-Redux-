import React from "react";
import Logo from "./logo/logo";
import PassengerPrices from "./passengerPrices/passengerPrices";
import classes from './head.module.css'

class Head extends React.Component {
    render(props) {
        return <div className={classes.head}>
            <Logo data={this.props.data.flight.carrier.caption}/>
            <PassengerPrices price={this.props.data.flight.price.passengerPrices[0].feeAndTaxes.amount}/>
        </div>
    }
}

export default Head