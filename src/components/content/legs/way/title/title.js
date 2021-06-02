import React from "react";
import classes from './title.module.css'

class Title extends React.Component {
    render(props) {
        let data = this.props.data
        let num = data.flight.legs[1].segments.length - 1

        const departureCity = data.flight.legs[1].segments[0].departureCity.caption
        const departureAirport = data.flight.legs[1].segments[0].departureAirport.caption
        const departureAirportUid = data.flight.legs[1].segments[0].departureAirport.uid

        const arrivalCity = data.flight.legs[1].segments[num].arrivalCity.caption
        const arrivalAirport = data.flight.legs[1].segments[num].arrivalAirport.caption
        const arrivalAirportUid = data.flight.legs[1].segments[num].arrivalAirport.uid

        return <div className={classes.title}>
            {departureCity}, {departureAirport} ({departureAirportUid})
            &rarr; {arrivalCity}, {arrivalAirport} ({arrivalAirportUid})
        </div>
    }
}

export default Title