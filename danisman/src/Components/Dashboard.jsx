import DanisanEkle from "./DashboardComponents/DanisanEkle";
import DanismanEkle from "./DashboardComponents/DanismanEkle";
import EnvanterEkle from "./DashboardComponents/EnvanterEkle";
import BilgiGuncelle from "./DashboardComponents/BilgiGuncelle";
import { useState } from "react";

const Dashboard = () => {
  const [sayfaAdi, setSayfaAdi] = useState("");

  return (
    <div className="h-full">
      <div className="flex ml-7 mb-6 justify-center rounded-none border-b border-blue-gray-50 bg-transparent p-0">
        <div className=" ml-5 mt-2 mx-12 text-lg px-8  text-gray-600 dark:text-gray-800 rounded-xl hover:bg-slate-700 hover:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
          <button>
            <a onClick={() => setSayfaAdi("danisanekle")}>Danışan Ekle</a>
          </button>
        </div>
        <div className="ml-5 mt-2 mx-12 text-lg px-8 text-gray-600 dark:text-gray-800   rounded-xl hover:bg-slate-700 hover:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 ">
          <button>
            <a onClick={() => setSayfaAdi("danismanekle")}>Danışman Ekle</a>
          </button>
        </div>
        <div className="ml-5 mt-2 mx-12 text-lg px-8 text-gray-600  dark:text-gray-800  rounded-xl hover:bg-slate-700 hover:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 ">
          <button>
            <a onClick={() => setSayfaAdi("envanterekle")}>Envanter Ekle</a>
          </button>
        </div>
      </div>
      {sayfaAdi=="" ? <div className="text-xl font-bold text-center h-full flex flex-col justify-center">Lütfen üst menüden seçim yapın</div> : sayfaAdi == "danisanekle" ? (
        <DanisanEkle></DanisanEkle>
      ) : sayfaAdi == "danismanekle" ? (
        <DanismanEkle></DanismanEkle>
      ) : sayfaAdi == "envanterekle" ? (
        <EnvanterEkle> </EnvanterEkle>
      ) : null}
    </div>
  );
};

export default Dashboard;
