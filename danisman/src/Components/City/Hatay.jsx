import axios from "axios";
import { useState, useEffect } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { TbPointFilled } from "react-icons/tb";
import { AiOutlineMenuUnfold } from "react-icons/ai";
const Hatay = () => {
  const [personelData, setPersonelData] = useState([]);
  const [merkezData, setMerkezData] = useState([]);
  const [hizmetData, setHizmetData] = useState([]);
  const [envanterData, setEnvanterData] = useState([]);
  const [kurumData, setKurumData] = useState([]);
  let navigate = useNavigate();
  const sehir = "Hatay";
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
    <div className="flex flex-col  w-[25vw]  my-6  mx-8  pl-2 bg-white border rounded-xl border-solid border-gray-50 pr-2 shadow-2xl ">
      <div className="flex ">
        <button
          className="flex basis-1/12  bg-none border-none mt-8 mb-3 pr-1 cursor-pointer "
          onClick={() => navigate("/")}
        >
          <AiOutlineMenuUnfold className="w-5 h-6 text-gray-700 inline-block" />
        </button>
        <p className="  pt-7 text-[#162270] basis-11/12 inline-block text-xl font-bold">
          HATAY
        </p>
      </div>
      {/* <div className="bg-slate-100 mt-3  flex-1 w-[24vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
    <p className="ml-2 font-medium">Personel Adı Soyadı</p>
  </div>
  <div className="bg-slate-100 mt-3  flex-1 w-[24vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
    {personelData.map((item, index) => (
      <>
        <p key={index} className="ml-2">
          {item.firstname} {item.surname}
        </p>
      </>
    ))}
  </div> */}
      {/* <div className="bg-slate-100 mt-3  flex-1 w-[24vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
    <p className="ml-2 font-medium">Merkezlerimiz</p>
  </div> */}
      <div className=" mt-3 flex  w-[24vw]  text-left text-gray-700">
        <TbPointFilled className="mt-1 ml-2 basis-1/12 text-amber-300 " />
        {merkezData.map((item, index) => (
          <>
            <p key={index} className="basis-11/12  text-[#162270] font-medium">
              {item.merkez_isim}
            </p>
          </>
        ))}
      </div>
      {/* <div className="bg-slate-100 mt-3  flex-1 w-[24vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
    <p className="ml-2 font-medium">Merkez Telefon Numaraları</p>
  </div>
  <div className="bg-slate-100 mt-3  flex-1 w-[24vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
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
  </div> */}
      {/* <div>
    <table className=" border-collapse border  border-slate-500   flex-1 w-[24vw] h-auto  text-left  border-solid    text-gray-700">
      <thead className=" py-1 mt-5 flex-1 w-[24vw] h-auto  text-left border  border-solid   border-gray-200 rounded-t-2xl text-gray-700">
        <tr>
          <th className="ml-2 font-medium border border-slate-600 basis-1/2 py-2">
            ARAÇ SAYISI
          </th>
          <th className="ml-2 font-medium  border border-slate-600 basis-1/2 py-2">
            ADET
          </th>
        </tr>{" "}
      </thead>
      <tbody>
        <tr>
          <td className="ml-2 border border-slate-700">Gezici Karavan</td>
          <td className="ml-2 border border-slate-700">
            {aracSayisi?.reduce((a, b) => a + b, 0)}
          </td>
        </tr>
        <tr>
          <td>Binek Araç</td>
          <td className="ml-2 border border-slate-700">
            {aracSayisi?.reduce((a, b) => a + b, 0)}
          </td>
        </tr>
      </tbody>
    </table>
  </div> */}

      <div class="flex flex-col   mt-6">
        <div class="-m-1.5  overflow-x-auto ">
          <div class="p-6 min-w-full inline-block  align-middle">
            <div class="overflow-hidden rounded-xl">
              <table class="min-w-full  border-collapse border   border-slate-200 ">
                <thead>
                  <tr className="bg-slate-100">
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs  border border-slate-200 font-medium text-gray-500 uppercase"
                    >
                      ARAÇ SAYISI
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium border border-slate-200 text-gray-500 uppercase"
                    >
                      ADET
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="  hover:bg-gray-100 ">
                    <td class="px-6 py-4 border border-slate-200 whitespace-nowrap text-sm font-normal text-gray-800 ">
                      Gezici Karavan
                    </td>
                    <td class="px-6 py-4 border border-slate-200 whitespace-nowrap text-sm text-gray-800 ">
                      {aracSayisi?.reduce((a, b) => a + b, 0)}
                    </td>
                  </tr>

                  <tr class=" hover:bg-gray-100 ">
                    <td class="px-6 py-4 border border-slate-200 whitespace-nowrap text-sm font-normal text-gray-800 ">
                      Binek Araç
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap border border-slate-200 text-sm text-gray-800 ">
                      {aracSayisi?.reduce((a, b) => a + b, 0)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col mt-6">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-6 min-w-full inline-block align-middle">
            <div class="overflow-hidden rounded-xl">
              <table class="min-w-full divide-y divide-gray-200 ">
                <thead>
                  <tr className="bg-slate-100">
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs border border-slate-200 font-medium text-gray-500 uppercase"
                    >
                      İŞ BİRLİĞİ YAPILAN KURUMLAR
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd:bg-white  hover:bg-gray-100 ">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium border border-slate-200 text-gray-800 ">
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
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-slate-100">
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs border border-slate-200 font-medium text-gray-500 uppercase"
                    >
                      TEŞEKKÜRLER
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-slate-100 mt-3  flex-1 w-[24vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
    <p className="ml-2 font-medium">İş Birliği Yapılan Kurumlar</p>
  </div>
  <div className="bg-slate-100 mt-3  flex-1 mb-4 w-[24vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
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
  </div> */}
      {/* <div className="bg-slate-100 w-[24vw] h-auto  flex-1 text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
    <p className="ml-2 font-medium">Ulaşılan Kişi Sayısı</p>
  </div>
  <div className="bg-slate-100 mt-3  flex-1 mb-10 w-[24vw] h-auto  text-left border  border-solid   border-gray-200 rounded-lg text-gray-700">
    <>
      <p className="ml-2">
        {ulasilanKisiSayisi?.reduce((a, b) => a + b, 0)}
      </p>
    </>
  </div> */}
    </div>
  );
};

export default Hatay;
