import React from "react";
import classes from './flightPerfoms.module.css'

class FlightPerfoms extends React.Component {
    render(props) {
        let num = this.props.data.flight.legs[1].segments.length - 1
        const airLine = this.props.data.flight.legs[1].segments[num].airline.caption
        return <div className={classes.airline}>Рейс выполняет: {airLine}</div>
    }
}

export default FlightPerfoms