import "./App.css";
import { ReactComponent as Harita } from "../src/assets/vectormap.svg";
import SehirİsimleriEkle from "./Components/SehirİisimleriEkle.jsx";
import axios from "axios";
import { MdPeopleAlt, MdPerson } from "react-icons/md";
import { useState, useEffect } from "react";
import ilust from "./assets/ilust.png";
import TardeLogo from "./assets/logo.jpg";

function App() {
  const [hizmetData, setHizmetData] = useState([]);

  let ulasilanKisiSayisi = 0;

  const isAnasayfa = window.location.pathname === "/";
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/hizmet")
      .then((res) => setHizmetData(res.data));
  }, []);

  hizmetData.forEach(
    (item) => (ulasilanKisiSayisi += item.erisilen_kisi_sayisi)
  );

  return (
    <div className="flex flex-col mt-3  mr-6 flex-grow  rounded-3xl  ">
      <Harita />
      <SehirİsimleriEkle />
      <div className=" flex flex-row mt-14 pb-3 justify-between mx-6">
        <div className="font-sans  flex  font-semibold text-[4rem] bg-white px-6 py-1 rounded-xl ">
          <div className="flex  flex-col mr-10 ml-2 ">
            <img
              className="max-w-[9rem] pt-2 pb-2 px-6 ml-4 "
              src={TardeLogo}
            />
            <p className="text-xs text-center ">
              Travma ve Afet Ruh Sağlığı <br /> Çalışmaları Derneği
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-blue-900 my-4">
              28 MART'TAN İTİBAREN
            </p>
            <div className="flex flex-row">
              <span className="ml-2 font-light mt-1 ">
                <MdPerson className="text-2xl mr-6"></MdPerson>{" "}
              </span>
              <span className="text-2xl font-normal ">
                {ulasilanKisiSayisi}
              </span>
              <p className=" text-sm  text-black mt-3 font-normal mr-1 ">
                Kişi
              </p>
            </div>
            <div className="flex flex-row mt-4">
              <span className="ml-2 font-light mt-1 ">
                <MdPeopleAlt className="text-2xl mr-6"></MdPeopleAlt>{" "}
              </span>
              <span className="text-3xl font-normal ">
                {ulasilanKisiSayisi}
              </span>
              <p className=" text-sm  text-black mt-3 font-normal mr-1 ">
                Etkinlik
              </p>
            </div>
          </div>
        </div>
        {isAnasayfa && (
          <div className="bg-amber-300 bg-opacity-30 w-[14rem] h-[15.8rem] mt-[-9.5rem]  mr-18 rounded-3xl">
            <a
              href={"/gönüllü"}
              className="mt-8 w-[12.4rem] mx-3 px-6 py-2 bg-amber-300 rounded-xl inline-block text-xs font-bold text-blue-900"
            >
              GÖNÜLLÜ OL
            </a>
            <img
              className="max-h-[15rem] py-3   min-h-full min-w-full"
              src={ilust}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
