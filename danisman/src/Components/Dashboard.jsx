import DanisanEkle from "./DashboardComponents/DanisanEkle";
import DanismanEkle from "./DashboardComponents/DanismanEkle";
import EnvanterEkle from "./DashboardComponents/EnvanterEkle";
import BilgiGuncelle from "./DashboardComponents/BilgiGuncelle";
import { useState } from "react";

const Dashboard = () => {
  const [sayfaAdi, setSayfaAdi] = useState("");
 
  return (
   <>
     <div className=" ml-5 mt-2 text-red-300 ">
        <button>
          <a onClick={() => setSayfaAdi("danisanekle")}>Personel Ekle</a>
        </button>
      </div>
      <div className="ml-5 mt-2  text-red-300 ">
        <button>
          <a onClick={() => setSayfaAdi("danismanekle")}>Danışman Ekle</a>
        </button>
      </div>
      <div className="ml-5 mt-2  text-red-300 ">
        <button>
          <a onClick={() => setSayfaAdi("envanterekle")}>Envanter Ekle</a>
        </button>
      </div>
      <div className="ml-5 mt-2  text-red-300 ">
        <button>
          <a onClick={() => setSayfaAdi("bilgiguncelle")}>Bilgi Güncelle</a>
        </button>
      </div>
       {sayfaAdi == "danisanekle" ? (
    <DanisanEkle></DanisanEkle>
  ) : sayfaAdi == "danismanekle" ? (
    <DanismanEkle></DanismanEkle>
  ) : sayfaAdi == "envanterekle" ? (
    <EnvanterEkle> </EnvanterEkle>
  ) : sayfaAdi == "bilgiguncelle" ? (
    <BilgiGuncelle></BilgiGuncelle>
  ) : null}</>
  );
};

export default Dashboard;
