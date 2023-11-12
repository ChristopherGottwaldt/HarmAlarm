import logo from './logo.svg';
import { ToggleSlider }  from "react-toggle-slider";
import './App.css';


function App() {
  return (
    <div className="App">

      <div>
        <ToggleSlider/>
      </div>
       <form>
        <label>
          Time:
          <input type="text" name="time" />
        </label>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default App;
