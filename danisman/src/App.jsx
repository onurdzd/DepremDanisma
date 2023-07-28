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
import SehirListesi from "./Components/SehirListesi";

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
      .get(`${import.meta.env.VITE_API_URL}/hizmet`)
      .then((res) => setHizmetData(res.data));
  }, []);

  hizmetData.forEach(
    (item) => (ulasilanKisiSayisi += item.erisilen_kisi_sayisi)
  );

  return (
    <div className="flex flex-col  min-h-[96vh] sm:w-[96vw] max-w-[1320px] ">
      <div className="md:flex md:flex-row bg-white rounded-[3rem] m-5 p-5 gap-5 border-[#D9E8E7] border-[20px] ">
        <div className="flex rounded-l-[2rem] flex-col basis-1/4 ">
          <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
        <div className="basis-3/4 flex flex-col bg-[url('/src/assets/mapZone.png')] rounded-3xl bg-cover">
          <div className="flex flex-col flex-grow rounded-3xl items-center ">
            <div className="flex ">
              <div className="hidden lg:block">
                <Harita />
              </div>
              <div>
                <div className="block lg:hidden "><SehirListesi /></div>
                {sehir && <Sehirler></Sehirler>}
              </div>
            </div>
            <SehirİsimleriEkle />
            <div className="flex lg:flex-row lg:justify-between flex-col items-center justify-center w-[95%]">

              <div className=" font-sans font-semibold text-[4rem] bg-white sm:ml-0 rounded-xl  flex items-center justify-center mt-5 max-w-[300px]">
                <div className="flex flex-col justify-center items-center w-full sm:flex-row p-3">
                  <div className="flex flex-col">
                    {" "}
                    <img
                      className="max-w-[7rem] pt-2 pb-2 px-2 ml-4 "
                      src={TardeLogo}
                    />
                    <p className="text-xs text-center ml-4 md:ml-0">
                      Travma ve Afet Ruh Sağlığı <br /> Çalışmaları Derneği
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-blue-900 my-4 sm:ml-0">
                      28 MART'TAN İTİBAREN
                    </p>
                    <div className="flex flex-col justify-center">
                      <div className="flex flex-row">
                        <span className="ml-2 font-light mt-1 ">
                          <MdPerson className="text-2xl mr-6"></MdPerson>{" "}
                        </span>
                        <span className="text-2xl font-normal ">
                          {ulasilanKisiSayisi}
                        </span>
                        <p className=" text-sm  text-black mt-3 font-normal ">
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
                        <p className=" text-sm  text-black mt-3 font-normal ">
                          Etkinlik
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-300 bg-opacity-30 rounded-3xl sm:max-w-[200px] max-w-[175px] sm:mt-4   flex flex-col items-center">
                <Link to={"/gonullu"}>
                  <a
                    href={"/gonullu"}
                    className="mt-6 mx-3 px-10 py-2 bg-amber-300 rounded-xl inline-block text-xs font-bold text-blue-900"
                  >
                    GÖNÜLLÜ OL
                  </a>
                </Link>
                <div className="w-[3/4]">
                  <img
                    className="py-3 w-full "
                    src={GonulluOlLogo}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
