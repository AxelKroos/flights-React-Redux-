import React from "react";
import classes from './way.module.css'
import Title from "./title/title";
import Time from "./time/time";

class Way extends React.Component {
    render(props) {
        return <div>
            <Title data={this.props.data} />
            <hr className={classes.hr}/>
            <Time data={this.props.data} index={this.props.index}/>
        </div>
    }
}

export default Way