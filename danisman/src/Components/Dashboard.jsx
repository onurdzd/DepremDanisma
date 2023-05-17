import { useState } from "react";
import DanisanEkle from "./DashboardComponents/DanisanEkle.jsx";
import DanismanEkle from "./DashboardComponents/DanismanEkle.jsx";
import EnvanterEkle from "./DashboardComponents/EnvanterEkle.jsx";
import BilgiGuncelle from "./DashboardComponents/BilgiGuncelle.jsx";

const Dashboard = () => {
  const [sayfaAdi, setSayfaAdi] = useState("");

  return (
    <div className="h-[auto] w-[95vw] mt-8 pl-6 flex gap-10">
      <div className=" bg-slate-100 w-[20vw] h-[60%vh] text-center border rounded-3xl border-solid border-red-600 ">
        {" "}
        <button className="mt-2  w-[17vw] bg-red-500 text-center text-white border border-solid border-blue-600 rounded-xl">
          GAZİANTEP
        </button>
        <button className="mt-2 w-[17vw] bg-red-500 text-white border border-solid border-blue-600 rounded-xl">
          ADIYAMAN
        </button>
        <button className="mt-2 w-[17vw] bg-red-500 text-white border border-solid border-blue-600 rounded-xl">
          KAHRAMANMARAŞ
        </button>
        <button className="mt-2 w-[17vw] bg-red-500 text-white border border-solid border-blue-600 rounded-xl">
          MALATYA
        </button>
        <button className="mt-2 w-[17vw] bg-red-500 text-white border border-solid border-blue-600 rounded-xl">
          DİYARBAKIR
        </button>
        <button className="mt-2 w-[17vw] bg-red-500 text-white border border-solid border-blue-600 rounded-xl">
          ŞANLIURFA
        </button>
        <button className="mt-2 w-[17vw] bg-red-500 text-white border border-solid border-blue-600 rounded-xl">
          KİLİS
        </button>
        <button className="mt-2 w-[17vw] bg-red-500 text-white border border-solid border-blue-600 rounded-xl">
          HATAY
        </button>
        <button className="mt-2 w-[17vw] bg-red-500 text-white border border-solid border-blue-600 rounded-xl">
          ADANA
        </button>
        <button className="mt-2 w-[17vw] bg-red-500 text-white border border-solid border-blue-600 rounded-xl">
          OSMANİYE
        </button>
      </div>
      <div className="flex-1 bg-slate-100 border rounded-3xl border-solid border-red-600">
        <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border rounded-3xl border-solid border-red-600">
          <p className="ml-4">Personel Adı Soyadı</p>
        </div>
        <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border rounded-3xl border-solid border-red-600">
          <p className="ml-4">Sümeyra Al</p>
          <p className="ml-4">Canan Tütünen</p>
        </div>
        <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border rounded-3xl border-solid border-red-600">
          <p className="ml-4">Merkezlerimiz</p>
        </div>
        <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border rounded-3xl border-solid border-red-600">
          <p className="ml-4">Nurdağı 1 Konteyner Kenti - Görüşme konteynerı</p>
          <p className="ml-4">
            {" "}
            Mobil Ekip (Nurdağı B-1 C1, TOKİ Konteyner Eğitim Kampüsü, Ahbap
            Okulları, Nurdağı 2, Fatih Mah. Yeni Mah. Kurudere Mah. )
          </p>
        </div>

        <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border rounded-3xl border-solid border-red-600">
          <p className="ml-4">Merkez Telefon Numaraları</p>
        </div>
        <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border rounded-3xl border-solid border-red-600">
          <p className="ml-4">0532 330 16 33</p>
          <p className="ml-4">0539 774 35 75</p>
        </div>
        <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border rounded-3xl border-solid border-red-600">
          <p className="ml-4">Araç Sayısı</p>
        </div>
        <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border rounded-3xl border-solid border-red-600">
          <p className="ml-4">1</p>
        </div>
        <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border rounded-3xl border-solid border-red-600">
          <p className="ml-4">İş Birliği Yapılan Kurumlar</p>
        </div>
        <div className="bg-slate-100 mt-4  ml-12 w-[60vw] h-auto  text-left border rounded-3xl border-solid border-red-600">
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
