import React from "react";

class TravelTime extends React.Component {
    render(props) {
        let num = this.props.data.flight.legs[0].segments.length - 1

        let departureTime = Date.parse(this.props.data.flight.legs[0].segments[0].departureDate)/1000;
        let arrivalTime = Date.parse(this.props.data.flight.legs[0].segments[num].arrivalDate)/1000;
        let hoursInTravel = ((arrivalTime - departureTime) / 60 / 60).toFixed()
        let minutes = ((arrivalTime - departureTime) / 60) - (hoursInTravel * 60)
        minutes = minutes < 0 ? minutes * -1 : minutes

        if ((hoursInTravel / 24) < 1) {
            return  <div>
                &#8986; {hoursInTravel + ' ч ' + minutes + ' мин '}
            </div>
        } else {
            let days = hoursInTravel / 24
            return <div>
                &#8986; {`${days.toFixed()} дн ` + (hoursInTravel - 24 * days.toFixed()) + ' ч ' + minutes}
            </div>
        }
    }
}

export default TravelTime