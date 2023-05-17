import { useState } from "react";
import DanisanEkle from "./DashboardComponents/DanisanEkle.jsx";
import DanismanEkle from "./DashboardComponents/DanismanEkle.jsx";
import EnvanterEkle from "./DashboardComponents/EnvanterEkle.jsx";
import BilgiGuncelle from "./DashboardComponents/BilgiGuncelle.jsx";

const Dashboard = () => {
  const [sayfaAdi, setSayfaAdi] = useState("");

  return (
    <div className="">
      <div className=" text-red-300 ">
        <button>
          <a onClick={() => setSayfaAdi("danisanekle")}>Danışan Ekle</a>
        </button>
      </div>
      <div className=" text-red-300 ">
        <button>
          <a onClick={() => setSayfaAdi("danismanekle")}>Danışman Ekle</a>
        </button>
      </div>
      <div className=" text-red-300 ">
        <button>
          <a onClick={() => setSayfaAdi("envanterekle")}>Envanter Ekle</a>
        </button>
      </div>
      <div className=" text-red-300 ">
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
      ) : null}
    </div>
  );
};

export default Dashboard;
