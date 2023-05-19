import "./App.css";
import AnaSayfaSolMenu from "./Components/AnaSayfaSolMenu.jsx";
import { ReactComponent as Harita } from "../src/assets/vectormap.svg";
import SehirİsimleriEkle from "./Components/SehirİisimleriEkle.jsx";

function App() {
  return (
    <>
    <div className="flex h-screen items-center">
        <AnaSayfaSolMenu/>
        <Harita/>
        </div>
        <SehirİsimleriEkle/>
    </>
  );
}

export default App;
