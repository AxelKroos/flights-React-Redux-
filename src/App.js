import React from "react";
import classes from './App.module.css';
import Content from "./components/content/content";
import NavBar from "./components/navBar/navBar";
import {connect} from "react-redux";
import {showMore} from "./store/actions/actions";

class App extends React.Component {
    render() {
        return <div className={classes.App}>
            <NavBar/>
            <div>
                <Content/>
                <button className={classes.button} onClick={this.props.showMore}>Показать еще</button>
            </div>
        </div>
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showMore: () => dispatch(showMore())
    }
}



export default connect(null, mapDispatchToProps)(App);
