import "./App.css";
import { ReactComponent as Harita } from "./vectormap2.svg";
// import harita from "./vectormap2.svg";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header></Header>
    <div className="map-of-regions">
      <ul className="list-of-regions">
        <li data-state="Gaziantep" className="region-card on">
          <div className="region-image">
         <img src="url" alt="Şehir" className="rounded-start"></img> 
          </div>
          <div className="region-content">
            <div className="fs-6 title">Şehir İsmi</div>
            <div className="desc">
              <p>Lorem ipsum.</p>
            </div>
          </div>
        </li>
      </ul>
      <Harita></Harita>
      {/* <img src={harita} alt="Şehir"></img>  */}
    </div>
    </div>
  );
}

export default App;
