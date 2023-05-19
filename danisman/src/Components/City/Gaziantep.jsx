import { useState } from "react";
import DanisanEkle from "../DashboardComponents/DanisanEkle";
import DanismanEkle from "../DashboardComponents/DanismanEkle";
import EnvanterEkle from "../DashboardComponents/EnvanterEkle";
import BilgiGuncelle from "../DashboardComponents/BilgiGuncelle";

const Gaziantep = () => {
  const [sayfaAdi, setSayfaAdi] = useState("");
  return (
    <div className="flex-1 bg-slate-100   border rounded-3xl border-solid border-gray-50 pr-10  shadow-2xl  dark:bg-cyan-900 ">
      <div className="flex ml-7 ">
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
      <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        <p className="ml-4 font-medium">Personel Adı Soyadı</p>
      </div>
      <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        <p className="ml-4">Sümeyra Al</p>
        <p className="ml-4">Canan Tütünen</p>
      </div>
      <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        <p className="ml-4 font-medium">Merkezlerimiz</p>
      </div>
      <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        <p className="ml-4">Nurdağı 1 Konteyner Kenti - Görüşme konteynerı</p>
        <p className="ml-4">
          {" "}
          Mobil Ekip (Nurdağı B-1 C1, TOKİ Konteyner Eğitim Kampüsü, Ahbap
          Okulları, Nurdağı 2, Fatih Mah. Yeni Mah. Kurudere Mah. )
        </p>
      </div>

      <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        <p className="ml-4 font-medium">Merkez Telefon Numaraları</p>
      </div>
      <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        <p className="ml-4">0532 330 16 33</p>
        <p className="ml-4">0539 774 35 75</p>
      </div>
      <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        <p className="ml-4 font-medium">Araç Sayısı</p>
      </div>
      <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        <p className="ml-4">1</p>
      </div>
      <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        <p className="ml-4 font-medium">İş Birliği Yapılan Kurumlar</p>
      </div>
      <div className="bg-slate-100 mt-4  ml-12 mb-4 w-[60vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
        <p className="ml-4">WHR</p>
        <p className="ml-4">AÇEV</p>
        <p className="ml-4">ASHB</p>
        <p className="ml-4">Sağlık Bakanlığı</p>
        <p className="ml-4">GASMEK</p>
        <p className="ml-4">Halk Eğitim Merkezi</p>
        <p className="ml-4">TOG</p>
        <p className="ml-4">Gaziantep Yardım Vakfı</p>
        <p className="ml-4">Empati Derneği</p>
        <p className="ml-4">KAÇUV</p>
        <p className="ml-4">Diyanet</p>
        <p className="ml-4">
          Yöret-Roman Diyalog Ağı - Sıfır Ayrımcılık Derneği( işbirliği için
          iletişime geçildi).
        </p>
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

export default Gaziantep;
