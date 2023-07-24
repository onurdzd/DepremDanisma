import "./App.css";
import { ReactComponent as Harita } from "../src/assets/vectormap.svg";
import SehirİsimleriEkle from "./Components/SehirİisimleriEkle.jsx";
import axios from "axios";
import { MdPeopleAlt, MdPerson } from "react-icons/md";
import { useState, useEffect } from "react";
import TardeLogo from "./assets/logo.jpg";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Link, useParams } from "react-router-dom";
import Sehirler from "./Components/Sehirler";
import GonulluOlLogo from "./assets/ilust.png";

function App() {
  const [hizmetData, setHizmetData] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let ulasilanKisiSayisi = 0;

  const isAnasayfa = window.location.pathname === "/";

  let { sehir } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/hizmet`)
      .then((res) => setHizmetData(res.data));
  }, []);

  hizmetData.forEach(
    (item) => (ulasilanKisiSayisi += item.erisilen_kisi_sayisi)
  );

  return (
    <div className="h-[100vh] sm:h-[96vh] sm:w-[80vw]">
      <div className="md:flex md:flex-row items-center bg-white rounded-[2rem] pb-2 ">
        <div className="flex bg-white h-full rounded-l-[2rem] flex-col basis-1/5 ">
          <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
        <div className="basis-4/5  h-full mt-3 mr-4  flex flex-col bg-[url('/src/assets/mapZone.png')] rounded-3xl bg-cover">
          <div className="flex flex-col mt-3  mr-6 flex-grow  rounded-3xl  ">
            <div className="flex mt-2  ">
              <Harita />
              {sehir && <Sehirler></Sehirler>}
            </div>
            <SehirİsimleriEkle />
            <div className=" flex flex-col md:flex-row mt-[-2rem] pb-12 justify-between sm:ml-[5rem]">
              <div className="font-sans flex flex-col sm:flex-row font-semibold text-[4rem] bg-white md:px-6 mr-14 ml-[4rem] sm:ml-0 py-1 md:h-[11rem]  rounded-xl mb-10 md:mb-0">
                <div className="flex flex-col mr-10 ml-2  ">
                  {" "}
                  <img
                    className="max-w-[9rem] pt-2 pb-2 px-6 ml-4 "
                    src={TardeLogo}
                  />
                  <p className="text-xs text-center ml-4 md:ml-0">
                    Travma ve Afet Ruh Sağlığı <br /> Çalışmaları Derneği
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-900 my-4 ml-6 sm:ml-0">
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
                <div className="bg-amber-300 w-[16rem]  bg-opacity-30 sm:w-[14rem] h-[18rem] md:h-[15.8rem] mt-[-1.6rem] pb-1 ml-[4rem] md:ml-0 rounded-3xl max-w-[220px]">
                  <Link to={"/gonullu"}>
                    <a
                      href={"/gonullu"}
                      className="mt-6 w-[12.4rem] mx-3 px-14 py-2 bg-amber-300 rounded-xl inline-block text-xs font-bold text-blue-900"
                    >
                      GÖNÜLLÜ OL
                    </a>
                  </Link>
                  <img
                    className="max-h-[15rem] py-3 min-h-full min-w-full "
                    src={GonulluOlLogo}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
