import  React, {Component} from "react";
import "./TimeList.css";

import _ from "lodash";

import TimeCard from "./TimeCard";

class TimeList extends Component {
    constructor(props){
        super(props);

        console.log(props);
        this.renderTimeList = this.renderTimeList.bind(this);
    }
    renderTimeList(){
        var times = this.props.recorded_timer;

        var time_cards = _.map(times, function (time, idx){
            return (
                <TimeCard deleteTime={()=>{
                    this.props.deleteTime(idx);
                }}
                key={idx}
                time={time}
                          />
            )
        }.bind(this)
        );

        return time_cards;
    }
    render(){
        return (
            <div className="time-list">
                <div className="title">
                    <h2>Time List</h2>
                </div>
                <div className="list">
                    {this.renderTimeList()}
                </div>
            </div>
        );
    }
}

export default TimeList;
