import React from "react";
import Way from "./Way/way";
import Transfer from "./transfer/transfer";
import FlightPerfoms from "./flightPerfoms/flightPerfoms";

class Body extends React.Component {
    render(props) {
        return <div>
            <Way data={this.props.data} index={this.props.index}/>
            <Transfer data={this.props.data}/>
            <FlightPerfoms data={this.props.data}/>
        </div>
    }
}

export default Body