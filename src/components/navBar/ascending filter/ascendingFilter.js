import React from "react";
import classes from './ascendingFilter.module.css'

class AscendingSort extends React.Component {
    render(props) {
        return <div>
            <h3 className={classes.AscendingSort}>Сортировать</h3>
            <div className="form_radio" className={classes.AscendingSort}>
                <input id="radio-1" type="radio" name="radio" value="1" onClick={(event => this.props.clickAscendingOrder(event.target.value, this.props.price))}/>
                <label htmlFor="radio-1">По возрастанию цены</label>
            </div>

            <div className="form_radio" className={classes.AscendingSort}>
                <input id="radio-2" type="radio" name="radio" value="2" onClick={(event => this.props.clickAscendingOrder(event.target.value))}/>
                <label htmlFor="radio-2">По убыванию цены</label>
            </div>

            <div className="form_radio" className={classes.AscendingSort}>
                <input id="radio-3" type="radio" name="radio" value="3" onClick={(event => this.props.clickAscendingOrder(event.target.value))}/>
                <label htmlFor="radio-3">По времени туда</label>
            </div>

            <div className="form_radio" className={classes.AscendingSort}>
                <input id="radio-4" type="radio" name="radio" value="4" onClick={(event => this.props.clickAscendingOrder(event.target.value))}/>
                <label htmlFor="radio-4">По времени обратно</label>
            </div>
        </div>
    }
}

export default AscendingSort