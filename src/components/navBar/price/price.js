import React from "react";
import classes from './price.module.css'

class Price extends React.Component {
    render(props) {
        return <div>
            <h3>Цена</h3>
            <input type="number" placeholder='От' step='500' value={this.props.inputValueStart} onChange={(event => this.props.changeInput(event.target.value, 0))}/>
            <input type="number" placeholder='До' step='500' value={this.props.inputValueEnd} onChange={(event => this.props.changeInput(event.target.value, 1))}/>
        </div>
    }
}

export default Price