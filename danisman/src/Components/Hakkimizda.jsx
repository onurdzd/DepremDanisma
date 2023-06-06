import axios from "axios";
import { MdPeopleAlt, MdPerson } from "react-icons/md";
import { useState, useEffect } from "react";
import SagUst from "../../public/sagust.svg"
import SagOrta from "../../public/sagorta.png"

function Hakkimizda() {
  const [hizmetData, setHizmetData] = useState([]);

  let ulasilanKisiSayisi = 0;

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/hizmet")
      .then((res) => setHizmetData(res.data));
  }, []);

  hizmetData.forEach(
    (item) => (ulasilanKisiSayisi += item.erisilen_kisi_sayisi)
  );

  return (
   <>
      <h1 className="pt-10 text-6xl text-blue-950 font-bold block ml-10 h-full">hakkımızda</h1>
      <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center w-[70%]">
        <div className="flex items-end">   <p className="font-light mt-4 text-sm leading-relaxed ">
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
        Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
        oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
        beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl
        boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden
        elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
        içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus
        PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık
        yazılımları ile popüler olmuştur.
      </p><img src={SagUst}></img></div>
      <div className="flex items-start">
      <p className="font-light mt-4 text-sm leading-relaxed">
        Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek
        değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum
        pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın
        zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü
        yayıncılık yazılımları ile popüler olmuştur. Lorem Ipsum, dizgi ve baskı
        endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen
        bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı
        galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte
        metinler olarak kullanıldı.
      </p>
   <img src={SagOrta}></img>
      </div>
      </div>
      </div>
      <div className="flex flex-col mt-3  mr-6 flex-grow  rounded-3xl  ">
        <div className=" flex flex-row mt-14 pb-3 justify-between mx-6">
          <div className="font-sans  flex  font-semibold text-[4rem] bg-white px-6 py-1 rounded-xl ">
            <div className="flex  flex-col mr-10 ml-2 ">
              <img
                className="max-w-[9rem] pt-2 pb-2 px-6 ml-4 "
                src="logo.jpg"
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
        <div className="bg-amber-300 bg-opacity-30 w-[20%] h-[20%] mt-[-5rem]  mr-18 rounded-3xl">
            <button className="mt-2 mx-3 px-6 py-2 bg-amber-300 rounded-xl inline-block text-xs font-bold text-blue-900">
              GÖNÜLLÜ OL
            </button>
            <img
              className="max-h-[25vh] py-3 min-h-full min-w-full"
              src="ilust.png"
            />
          </div>
        </div>
      </div>
      </>
  );
}

export default Hakkimizda;
