import "./App.css";
import { ReactComponent as Harita } from "../src/assets/vectormap.svg";
import SehirİsimleriEkle from "./Components/SehirİisimleriEkle.jsx";
import axios from "axios";
import { useState, useEffect } from "react";


function App() {

  const [hizmetData, setHizmetData] = useState([]);

  let ulasilanKisiSayisi =0

  useEffect(() => {
    axios
  .get("http://localhost:9000/api/hizmet")
  .then((res) =>
    setHizmetData(res.data)
  )},[])

  hizmetData.forEach(item=> ulasilanKisiSayisi+=item.erisilen_kisi_sayisi)

  return (
    <div className="flex flex-col items-center mt-8 flex-grow justify-center">
      <Harita />
      <SehirİsimleriEkle />
      <div className="font-sans font-semibold text-[4rem] mt-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-emerald-700 to-indigo-700 "><h1>Ulaşılan Kişi Sayısı: <span className="text-[3.5rem]">{ulasilanKisiSayisi}</span></h1></div>
    </div>
  );
}

export default App;
