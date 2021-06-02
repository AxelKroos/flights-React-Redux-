import React from "react";
import classes from './departureTime.module.css'

class DepartureTime extends React.Component {
    render(props) {
        let depTime = this.props.data.flight.legs[0].segments[0].departureDate.split('T')
        let depTimeDate = depTime[0]
        let days = ['Вc', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        let months = ["Янв.", "Фев.", "Мар.", "Апр.", "Мая", "Июня", "Июля", "Авг.", "Сен.", "Окт.", "Ноя.", "Дек."]
        let date = new Date(depTimeDate).getDay()

        depTime = depTime[1].split(':')
        depTime = (depTime[0] + depTime[1]).split('')
        depTime.splice(2, 0, ':')

        const dayOfTheWeek = days[date]
        const depDate = depTimeDate.split('-')
        const dayOfTheMonth = depDate[2]
        const month = depDate[1].split('')
        const newArr = (arr) => arr[0] == '0' ? months[arr.slice(1)] : null

        const departureDate = '' + dayOfTheMonth + ' ' + newArr(month) + ' ' + dayOfTheWeek

        return <div className={classes.departureTime}>
            {depTime.join('')} <p className={classes.departureDate}>{departureDate}</p>
        </div>
    }
}

export default DepartureTime