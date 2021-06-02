import React from "react";
import classes from './transferFilter.module.css'

class TransferFilter extends React.Component {
    render(props) {
        return <div className={classes.AllTransferFilter}>
            <h3>Фильтровать</h3>
            <div>
                <div className={classes.TransferFilter}>
                    <input id="radio-5" type="radio" name="radio" value="5"
                           onClick={(event => this.props.clickAscendingOrder(event.target.value))}/>
                    <label htmlFor="radio-5">1 пересадка</label>
                </div>

                <div className={classes.TransferFilter}>
                    <input id="radio-6" type="radio" name="radio" value="6"
                           onClick={(event => this.props.clickAscendingOrder(event.target.value))}/>
                    <label htmlFor="radio-6">Без пересадок</label>
                </div>
            </div>
        </div>
    }
}

export default TransferFilter