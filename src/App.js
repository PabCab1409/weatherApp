import "./App.css";
import DayStatus from "./Components/DayStatus";

function App() {
  return (
    <div className="containerMenu">
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Map</a>
        </li>
      </ul>
      <div className="containerSearcher">
        <input placeholder="Pablo"></input>
      </div>
      <h1 className="cityTitle">TOLEDO</h1>
      <DayStatus></DayStatus>
    </div>
  );
}

export default App;
