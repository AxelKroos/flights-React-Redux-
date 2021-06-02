import React from "react";
import classes from './airlines.module.css'

class Airlines extends React.Component {
    render(props) {
        let arr = this.props.data.map((elem) => {
            return elem.flight.carrier.caption
        })
        let counts = {},
            res = [];
        for (var i in arr) {
            counts[arr[i]] = (counts[arr[i]] || 0) + 1;
        }
        Object.keys(counts).sort(function(a, b) {
            return counts[b] - counts[a]
        }).forEach(function(el, idx, arr) {
            res.push([el, counts[el]]);
        });

        res.sort()

        const result = res.map(elem => {
            return <div className={classes.elems}>
                <input type="checkbox" onClick={() => this.props.filterAirlines(elem[0])}/> - {elem[0]}
            </div>
        })

        return <div className={classes.result}>
            <h5>Авиакомпании</h5>
            {result}
        </div>
    }
}

export default Airlines