import React from "react";
import classes from './time.module.css'
import TravelTime from "./travelTime/travelTime";
import DepartureTime from "./departureTime/departureTime";
import ArrivalTime from "./arrivalTime/arrivalTime";

class Time extends React.Component {
    render(props) {
        return <div className={classes.time}>
            <DepartureTime data={this.props.data}/>
            <TravelTime data={this.props.data}/>
            <ArrivalTime data={this.props.data}/>
        </div>

    }
}

export default Time