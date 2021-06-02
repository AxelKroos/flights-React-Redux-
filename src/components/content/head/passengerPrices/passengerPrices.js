import React from "react";
import classes from './passengerPrices.module.css'

class PassengerPrices extends React.Component {
    render(props) {
        return <div className={classes.price}><span>{this.props.price} ₽ </span><p>
            Стоимость для одного взрослого пассажира
        </p></div>
    }
}

export default PassengerPrices