import DanisanEkle from "./DashboardComponents/DanisanEkle";
import DanismanEkle from "./DashboardComponents/DanismanEkle";
import EnvanterEkle from "./DashboardComponents/EnvanterEkle";
import BilgiGuncelle from "./DashboardComponents/BilgiGuncelle";
import { useState } from "react";

const Dashboard = () => {

  const [sayfaAdi, setSayfaAdi] = useState("");

  return (
    <div className="">
     <div className="flex ml-7 justify-center">
        <div className=" ml-5 mt-2 mx-12 text-lg px-2 text-gray-600 dark:text-gray-200 rounded-xl hover:bg-slate-700  focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
          <button>
            <a onClick={() => setSayfaAdi("danisanekle")}>Personel Ekle</a>
          </button>
        </div>
        <div className="ml-5 mt-2 mx-12 text-lg px-2 text-gray-600 dark:text-gray-200 rounded-xl hover:bg-slate-700  focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 ">
          <button>
            <a onClick={() => setSayfaAdi("danismanekle")}>Danışman Ekle</a>
          </button>
        </div>
        <div className="ml-5 mt-2 mx-12 text-lg text-gray-600 px-2  dark:text-gray-200 rounded-xl hover:bg-slate-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 ">
          <button>
            <a onClick={() => setSayfaAdi("envanterekle")}>Envanter Ekle</a>
          </button>
        </div>
        <div className="ml-5 mt-2 mx-12 text-lg text-gray-600 px-2  dark:text-gray-200 rounded-xl hover:bg-slate-700  focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
          <button>
            <a onClick={() => setSayfaAdi("bilgiguncelle")}>Bilgi Güncelle</a>
          </button>
        </div>
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
