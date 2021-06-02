import React from "react";
import Title from "./title/title";
import Time from "./time/time";
import classes from './way.module.css'

class Way extends React.Component {
    render(props) {
        return <div>
            <Title data={this.props.data}/>
            <hr className={classes.hr}/>
            <Time data={this.props.data}/>
        </div>
    }
}

export default Way