import "./App.css";
import { ReactComponent as Harita } from "../src/assets/vectormap.svg";
import SehirİsimleriEkle from "./Components/SehirİisimleriEkle.jsx";

function App() {
  return (
    <>
    <div className="flex items-center mt-8 w-[45vw] ">
        <Harita/>
        </div>
        <SehirİsimleriEkle/>
    </>
  );
}

export default App;
