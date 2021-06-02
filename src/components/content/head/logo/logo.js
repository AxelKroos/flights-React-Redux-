import React from "react";
import classes from './logo.module.css'

class Logo extends React.Component {
    render(props) {
        return <div className={classes.logo}>{this.props.data}</div>
    }
}

export default Logo