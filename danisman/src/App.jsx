import "./App.css";
import { ReactComponent as Harita } from "../src/assets/vectormap.svg";
import SehirİsimleriEkle from "./Components/SehirİisimleriEkle.jsx";

function App() {
  return (
    <>
    <div className="flex h-screen items-center mt-8">
        <Harita/>
        </div>
        <SehirİsimleriEkle/>
    </>
  );
}

export default App;
