import axios from "axios";
import { useState, useEffect } from "react";

const Adıyaman = () => {
  const [personelData, setPersonelData] = useState([]);
  const [merkezData, setMerkezData] = useState([]);
  const [hizmetData, setHizmetData] = useState([]);
  const [envanterData, setEnvanterData] = useState([]);
  const [kurumData, setKurumData] = useState([]);
  const sehir = "Adıyaman";
  const aracSayisi = [];
  const ulasilanKisiSayisi = [];

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/personel")
      .then((res) =>
        setPersonelData(res.data?.filter((elem) => elem.sehir_isim == sehir))
      );
    axios
      .get("http://localhost:9000/api/hizmet")
      .then((res) =>
        setHizmetData(res.data?.filter((elem) => elem.sehir_isim == sehir))
      );
    axios
      .get("http://localhost:9000/api/merkez")
      .then((res) =>
        setMerkezData(res.data?.filter((elem) => elem.sehir_isim == sehir))
      );
    axios
      .get("http://localhost:9000/api/envanter")
      .then((res) =>
        setEnvanterData(res.data?.filter((elem) => elem.sehir_isim == sehir))
      );
    axios
      .get("http://localhost:9000/api/kurum")
      .then((res) =>
        setKurumData(res.data?.filter((elem) => elem.sehir_isim == sehir))
      );
  }, []);

  envanterData?.map((item) => aracSayisi.push(item.envanter_adet));

  hizmetData?.map((item) => ulasilanKisiSayisi.push(item.erisilen_kisi_sayisi));

  return (
    <div className="flex flex-col justify-center flex-1 w-[45vw] mt-4 mx-auto pl-2 bg-slate-100 border rounded-3xl border-solid border-gray-50 pr-2 shadow-2xl dark:bg-cyan-900 max-w-fit ">
      <div className="bg-slate-100 mt-3  w-[40vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        <p className="ml-2 font-medium">Personel Adı Soyadı</p>
      </div>
      <div className="bg-slate-100 mt-3  w-[40vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        {personelData.map((item, index) => (
          <>
            <p key={index} className="ml-2">
              {item.firstname} {item.surname}
            </p>
          </>
        ))}
      </div>
      <div className="bg-slate-100 mt-3  w-[40vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        <p className="ml-2 font-medium">Merkezlerimiz</p>
      </div>
      <div className="bg-slate-100 mt-3  w-[40vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        {merkezData.map((item, index) => (
          <>
            <p key={index} className="ml-2">
              {item.merkez_isim}
            </p>
          </>
        ))}
      </div>
      <div className="bg-slate-100 mt-3  w-[40vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        <p className="ml-2 font-medium">Merkez Telefon Numaraları</p>
      </div>
      <div className="bg-slate-100 mt-3  w-[40vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        {merkezData.map((item, index) => (
          <>
            <p key={index} className="ml-2">
              {item.m_telefon1}
            </p>
            <p key={index} className="ml-2">
              {item.m_telefon2}
            </p>
          </>
        ))}
      </div>
      <div className="bg-slate-100 mt-3  w-[40vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        <p className="ml-2 font-medium">Araç Sayısı</p>
      </div>
      <div className="bg-slate-100 mt-3  w-[40vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        <>
          <p className="ml-2">{aracSayisi?.reduce((a, b) => a + b, 0)}</p>
        </>
      </div>
      <div className="bg-slate-100 mt-3  w-[40vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        <p className="ml-2 font-medium">İş Birliği Yapılan Kurumlar</p>
      </div>
      <div className="bg-slate-100 mt-3  mb-4 w-[40vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        {kurumData.map((item, index) => (
          <>
            <p key={index} className="ml-2">
              {item.kurum_adi}
            </p>
            <p key={index} className="ml-2">
              {item.kurum_aciklama}
            </p>
          </>
        ))}
      </div>
      <div className="bg-slate-100 w-[40vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        <p className="ml-2 font-medium">Ulaşılan Kişi Sayısı</p>
      </div>
      <div className="bg-slate-100 mt-3  mb-4 w-[40vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        <>
          <p className="ml-2">
            {ulasilanKisiSayisi?.reduce((a, b) => a + b, 0)}
          </p>
        </>
      </div>
    </div>
  );
};

export default Adıyaman;
