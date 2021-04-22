import  React, {Component} from "react";
import "./CountDownInput.css";

class CountDownInput extends Component {
  constructor(props){
    super(props);
  this.state = {
    tempDuration: this.props.duration
  };
  this.handleInputChange = this.handleInputChange.bind(this);
  this.updateDuration = this.updateDuration.bind(this);
 }


  handleInputChange(e){
      let duration = parseInt(e.target.value);

      if(duration > 0){
        this.setState({
          ...this.state,
          tempDuration: duration
        });
      }
  }
  updateDuration(){
    var new_duration = this.state.tempDuration;
    this.props.updateDuration(new_duration);
  }
  render(){
    return (
    <div className="Countdown-Input">
      <div className="input-title">
        <h2>Set the duration</h2>
      </div>
      <div className = "d-flex form-group duration-form">
        <label className="duration-label">Duration (min):</label>
        <input
          value={this.state.tempDuration}
          onChange={this.handleInputChange}
          className = "flex-fill form-control"
          type="number"
          />
      </div>
      <div className = "submission-button">
        <button onClick={this.updateDuration} className = "btn btn-primary">Set Duration</button>
      </div>
    </div>
    );
  }
}

export default CountDownInput;
