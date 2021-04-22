import  React, {Component} from "react";
import "./TimeCard.css";

import * as EasyTimer from "easytimer.js";


class TimeCard extends Component {
    constructor(props){
        super(props);

        console.log(props);

        this.renderTime = this.renderTime.bind(this);
    }
    renderTime(time){
        var new_timer = new EasyTimer.Timer();
        new_timer.start({startValues: time});
        var time_string = new_timer.getTimeValues().toString();
        new_timer.stop();
        return time_string;
    }
    render(){
        return (
            <div className="time-card">
                <h3 className="time-text">{this.renderTime(this.props.time)}</h3>
                <button onClick={this.props.deleteTime} className="btn btn-danger">
                    <i className="fas fa-trash"/>
                </button>
            </div>
        );
    }
}

export default TimeCard;
