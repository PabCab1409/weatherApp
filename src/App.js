import "./App.css";

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
      <h1>TOLEDO</h1>
      <div className="containerStatsCity">
        <div className="generalInfo">
          <h1 className="degreesTitle">18 °C</h1>
          <img className="weatherImg" src="https://www.metaweather.com/static/img/weather/s.svg"></img>
        </div>
        <div className="dayInfo">
          asda
        </div>
      </div>
    </div>
  );
}

export default App;
