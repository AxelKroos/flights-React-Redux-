import React from "react";
import classes from './flightPerfoms.module.css'

class FlightPerfoms extends React.Component {
    render(props) {
        const airLine = this.props.data.flight.legs[0].segments[0].airline.caption
        return <div className={classes.airline}>Рейс выполняет: {airLine}</div>
    }
}

export default FlightPerfoms