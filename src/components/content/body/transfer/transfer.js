import React from "react";
import classes from './transfer.module.css'

class Transfer extends React.Component {
    render() {
        let stops = this.props.data.flight.legs[0].segments.length
        const transfer = <div className={classes.transfer}>
            <hr/>
            {stops < 1 ? <p>Без пересадок</p> : <p>Пересадок: {stops - 1}</p>}
            <hr/>
        </div>

        return <div>{transfer}</div>
    }
}

export default Transfer