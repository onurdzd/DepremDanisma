import { useState } from "react";
import DanisanEkle from "./DashboardComponents/DanisanEkle.jsx";
import DanismanEkle from "./DashboardComponents/DanismanEkle.jsx";
import EnvanterEkle from "./DashboardComponents/EnvanterEkle.jsx";
import BilgiGuncelle from "./DashboardComponents/BilgiGuncelle.jsx";

const Dashboard = () => {
  const [sayfaAdi, setSayfaAdi] = useState("");

  return (
    <div className="h-[80vh] w-[95vw] mt-8 pl-6 flex gap-10">
      <div className=" bg-slate-100 w-[20vw] h-[60%vh] text-center border rounded-3xl border-solid border-red-600 ">
        {" "}
        <p className="mt-2">sol sütun</p>
      </div>
      <div className="flex-1 bg-slate-100 border rounded-3xl border-solid border-red-600">
        <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border rounded-3xl border-solid border-red-600">
          <p className="ml-4">Personel Adı Soyadı</p>
        </div>
        <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border rounded-3xl border-solid border-red-600">
          <p className="ml-4">Sümeyra Al</p>
          <p className="ml-4">Canan Tütünen</p>
        </div>
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
        {/*  {sayfaAdi == "danisanekle" ? (
          <DanisanEkle></DanisanEkle>
        ) : sayfaAdi == "danismanekle" ? (
          <DanismanEkle></DanismanEkle>
        ) : sayfaAdi == "envanterekle" ? (
          <EnvanterEkle> </EnvanterEkle>
        ) : sayfaAdi == "bilgiguncelle" ? (
          <BilgiGuncelle></BilgiGuncelle>
        ) : null} */}
      </div>
    </div>
  );
};

export default Dashboard;
