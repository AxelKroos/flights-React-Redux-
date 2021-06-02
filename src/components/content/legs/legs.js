import React from "react";
import Way from "./way/way";
import Transfer from "./transfer/transfer";
import FlightPerfoms from "./flightPerfoms/flightPerfoms";

class Legs extends React.Component {
    render(props) {
        return <div>
            <Way data={this.props.data}/>
            <Transfer data={this.props.data}/>
            <FlightPerfoms data={this.props.data}/>
        </div>
    }
}

export default Legs