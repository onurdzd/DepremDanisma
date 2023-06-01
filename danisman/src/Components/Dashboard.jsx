import { useState } from "react";

import GridTableEnvanter from "./GridTables/GridTableEnvanter";
import GridTablePersonel from "./GridTables/GridTablePersonel";
import GridTableMerkez from "./GridTables/GridTableMerkez";
import GridTableKurum from "./GridTables/GridTableKurum";
import GridTableSehir from "./GridTables/GridTableSehir";

import GridTableHizmet from "./GridTables/GridTableHizmet";

const Dashboard = () => {
  const [sayfaAdi, setSayfaAdi] = useState("");

  return (
    <div className="h-full w-[90vw]">
      <div className="flex mb-6 justify-center rounded-none border-b-8 border-blue-gray-50 bg-transparent p-0 font-bold">
        <div className="ml-5 mt-2 mx-12 text-xl px-8 text-gray-600  dark:text-gray-800  rounded-xl hover:bg-slate-700 hover:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 ">
          <button>
            <a onClick={() => setSayfaAdi("merkeztablo")}>Merkez Tablo</a>
          </button>
        </div>
        <div className=" ml-5 mt-2 mx-12 text-xl px-8  text-gray-600 dark:text-gray-800 rounded-xl hover:bg-slate-700 hover:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
          <button>
            <a onClick={() => setSayfaAdi("personeltablo")}>Personel Tablo</a>
          </button>
        </div>
        <div className="ml-5 mt-2 mx-12 text-xl px-8 text-gray-600 dark:text-gray-800   rounded-xl hover:bg-slate-700 hover:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 ">
          <button>
            <a onClick={() => setSayfaAdi("envantertablo")}>Envanter Tablo</a>
          </button>
        </div>
        <div className="ml-5 mt-2 mx-12 text-lg px-8 text-gray-600 dark:text-gray-800   rounded-xl hover:bg-slate-700 hover:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 ">
          <button>
            <a onClick={() => setSayfaAdi("kurumtablo")}>Kurum Tablo</a>
          </button>
        </div>

        <div className="ml-5 mt-2 mx-12 text-lg px-8 text-gray-600 dark:text-gray-800   rounded-xl hover:bg-slate-700 hover:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 ">
          <button>
            <a onClick={() => setSayfaAdi("hizmettablo")}>Hizmet Tablo</a>
          </button>
        </div>
        <div className="ml-5 mt-2 mx-12 text-lg px-8 text-gray-600 dark:text-gray-800   rounded-xl hover:bg-slate-700 hover:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 ">
          <button>
            <a onClick={() => setSayfaAdi("sehirtablo")}>Şehir Tablo</a>
          </button>
        </div>
      </div>
      {sayfaAdi == "" ? (
        <div className="text-xl font-bold text-center h-full flex flex-col justify-center">
          Lütfen üst menüden seçim yapın
        </div>
      ) : sayfaAdi == "merkeztablo" ? (
        <GridTableMerkez />
      ) : sayfaAdi == "personeltablo" ? (
        <GridTablePersonel />
      ) : sayfaAdi == "envantertablo" ? (
        <GridTableEnvanter />
      ) : sayfaAdi == "kurumtablo" ? (
        <GridTableKurum />
      ) : sayfaAdi == "hizmettablo" ? (
        <GridTableHizmet />
      ) : sayfaAdi == "sehirtablo" ? (
        <GridTableSehir />
      ) : null}
    </div>
  );
};

export default Dashboard;
