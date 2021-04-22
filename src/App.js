import DatePicker from "react-datepicker";
import {Component, useState} from "react";
import './App.css';

import 'react-datepicker/dist/react-datepicker.css'
import TimeList from "./containers/TimeListContainer"
import Timer from "./containers/TimerContainer"


// Redux store
import {store} from "./store";
import {Provider} from 'react-redux';

//actions
import {runTest} from './actions'

const DatePanel = () => {
  const [startDate, setStartDate] = useState(new Date());


  return (
      <DatePicker
          selected={startDate}
          onChange={date =>{
            setStartDate(date);

            function getConvertedDate(date) {
              var today = date;
              var dd = String(today.getDate()).padStart(2, '0');
              var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
              var yyyy = today.getFullYear();

              today = yyyy + '-' + mm + '-' + dd;
              console.log(today);
            }

            getConvertedDate(date);
          }}
          filterDate = {(date) => {
            return new Date() > date;
          }}

          inline
      />
  );
}

class App extends Component {
constructor(props){
  super(props);

  store.dispatch(runTest());
}
  render(){
    return (
  <Provider store = {store}>
    <div className="App d-flex flex-column container">
      <div className="Header">
        <h1>Web Timer App</h1>
      </div>

      <div className="d-flex flex-fill justify-content-center flex-column">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="timer-container">
              <Timer/>
            </div>
            <div className="times-list">
               <TimeList/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DatePanel/>
  </Provider>
    );
  }
}

export default App;
