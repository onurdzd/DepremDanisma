import axios from "axios";
import { MdPeopleAlt, MdPerson } from "react-icons/md";
import { useState, useEffect } from "react";
import SagUst from "../assets/sagust.svg";
import SagOrta from "../assets/sagorta.png";
import GonulluOlLogo from "../assets/ilust.png";
import TardeLogo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import Header from "./Header";

function Hakkimizda() {
  const [hizmetData, setHizmetData] = useState([]);

  let ulasilanKisiSayisi = 0;

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/hizmet`)
      .then((res) => setHizmetData(res.data));
  }, []);

  hizmetData.forEach(
    (item) => (ulasilanKisiSayisi += item.erisilen_kisi_sayisi)
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className=" md:flex md:flex-row sm:bg-white  bg-[url('/src/assets/mapZone.png')] sm:bg-none sm:rounded-[2rem]  pb-2 ">
        <div className="flex bg-white h-full rounded-l-[2rem] flex-col basis-1/5 ">
          <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
        <div className="basis-4/5  h-full sm:mt-3 sm:mx-4  flex flex-col sm:bg-[url('/src/assets/mapZone.png')] sm:rounded-3xl bg-cover">
          <h1 className="pt-10 text-5xl md:text-6xl text-blue-950 font-bold block  ml-16 md:ml-10 h-full">
            hakkımızda
          </h1>
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-col items-center w-full">
              <div className="md:flex justify-between ml-[4rem] md:ml-[6.6rem] mr-[3rem]">
                <p className="font-thin mt-4 text-[32px] leading-[45px] md:w-[55%] text-gray-500  pt-10">
                  Affan kötülükten uzak durandır. Besleyicidir, Bağımsızdır,
                  Çeşitlidir, Barışseverdir, Kapsayıcıdır
                </p>

                <img src={SagUst} className=" w-44 mt-[-8rem] hidden md:block" />
              </div>
              <div className="md:flex md:justify-between ml-[4rem] md:ml-[6.6rem] mb-14 mr-[4rem] md:mr-[3rem]">
                <p className="font-light mt-14 text-sm leading-6 md:w-[48%] ">
                  Affan, Travma ve Afet Ruh Sağlığı Çalışmaları Derneği (TARDE)
                  bünyesinde Kahramanmaraş Pazarcık merkezli deprem sonrası Maraş,
                  Hatay, Antep, İskenderun, Osmaniye, Diyarbakır, Urfa, Adıyaman,
                  Malatya’daki merkezlerde depremden etkilenen bireylere yönelik
                  ücretsiz psikolojik destek hizmeti sunan, İstanbul Bilgi
                  Üniversitesi Travma ve Afet Ruh Sağlığı Çalışmaları Uygulamalı
                  Ruh Sağlığı Programı tarafından desteklenen psikososyal destek
                  hizmeti projesidir.
                </p>

                <img src={SagOrta} className="h-52 mt-[-2rem] hidden md:block" />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-1  mr-6 flex-grow  rounded-3xl  ">
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
              <div className="bg-amber-300 w-[16rem]  bg-opacity-30 sm:w-[14rem] h-[18rem] md:h-[15.8rem] mt-[-1.6rem] pb-1 ml-[4rem] md:ml-0 rounded-3xl">
                <Link to={"/gonullu"}>
                  <a
                    href={"/gonullu"}
                    className="mt-6 w-[12.4rem] mx-3 px-14 py-2 bg-amber-300 rounded-xl inline-block text-xs font-bold text-blue-900"
                  >
                    GÖNÜLLÜ OL
                  </a>
                </Link>
                <img
                  className="max-h-[15rem] py-3 min-h-full min-w-full"
                  src={GonulluOlLogo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hakkimizda;
