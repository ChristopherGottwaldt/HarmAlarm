import logo from './logo.svg';
import ReactDOM from 'react-dom'
import React from 'react';
import { ToggleSlider }  from "react-toggle-slider";
import './App.css';
import AlarmClock from './AlarmClock';

function App() {
  return (
    <div className="App">
      <AlarmClock/>
      {/* <div>
        <ToggleSlider/>
      </div>
       <form>
        <label>
          Time:
          <input type="text" name="time" />
        </label>
        <input type="submit" value="Add" /> */}
      {/* </form> */}
    </div>
  );
}

export default App