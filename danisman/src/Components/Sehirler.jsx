import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TbPointFilled } from "react-icons/tb";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Sehirler = () => {
  const [merkezData, setMerkezData] = useState([]);
  const [hizmetData, setHizmetData] = useState([]);
  const [envanterData, setEnvanterData] = useState([]);
  const [kurumData, setKurumData] = useState([]);
  let navigate = useNavigate();
  let { sehir } = useParams();
  const aracSayisi = [];
  const ulasilanKisiSayisi = [];

  let ilkHarfBuyukSehir = sehir.charAt(0).toUpperCase() + sehir.slice(1);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/hizmet`)
      .then((res) => {
        setHizmetData(res.data?.filter((elem) => elem.sehir_isim == ilkHarfBuyukSehir))
      }
      );

    axios
      .get(`${import.meta.env.VITE_API_URL}/merkez`)
      .then((res) =>
        setMerkezData(res.data?.filter((elem) => elem.sehir_isim == ilkHarfBuyukSehir))
      );
    axios
      .get(`${import.meta.env.VITE_API_URL}/envanter`)
      .then((res) =>
        setEnvanterData(res.data?.filter((elem) => elem.sehir_isim == ilkHarfBuyukSehir))
      );
    axios
      .get(`${import.meta.env.VITE_API_URL}/kurum`)
      .then((res) =>
        setKurumData(res.data?.filter((elem) => elem.sehir_isim == ilkHarfBuyukSehir))
      );
  }, []);

  envanterData?.map((item) => aracSayisi.push(item.envanter_adet));

  hizmetData?.map((item) => ulasilanKisiSayisi.push(item.erisilen_kisi_sayisi));

  return (
    <div className="flex flex-col  w-[20vw]  my-6  mx-8  pl-2 bg-white border rounded-xl border-solid border-gray-50 pr-2 shadow-2xl ">
      <div className="flex ">
        <button
          className="flex basis-1/12  bg-none border-none mt-8 mb-3 pr-1 cursor-pointer "
          onClick={() => navigate("/")}
        >
          <AiOutlineMenuUnfold className="w-5 h-6 text-gray-700 inline-block" />
        </button>
        <p className="  pt-7 text-[#162270] basis-11/12 inline-block text-xl font-bold">
          ADANA
        </p>
      </div>
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
      <div className="flex flex-col   mt-6">
        <div className="-m-1.5  overflow-x-auto ">
          <div className="p-6 min-w-full inline-block  align-middle">
            <div className="overflow-hidden rounded-xl">
              <table className="min-w-full  border-collapse border   border-slate-200 ">
                <thead>
                  <tr className="bg-slate-100">
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs  border border-slate-200 font-medium text-gray-500 uppercase"
                    >
                      ARAÇ SAYISI
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium border border-slate-200 text-gray-500 uppercase"
                    >
                      ADET
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="  hover:bg-gray-100 ">
                    <td className="px-6 py-4 border border-slate-200 whitespace-nowrap text-sm font-normal text-gray-800 ">
                      Gezici Karavan
                    </td>
                    <td className="px-6 py-4 border border-slate-200 whitespace-nowrap text-sm text-gray-800 ">
                      {aracSayisi?.reduce((a, b) => a + b, 0)}
                    </td>
                  </tr>
                  <tr className=" hover:bg-gray-100 ">
                    <td className="px-6 py-4 border border-slate-200 whitespace-nowrap text-sm font-normal text-gray-800 ">
                      Binek Araç
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-slate-200 text-sm text-gray-800 ">
                      {aracSayisi?.reduce((a, b) => a + b, 0)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-6 min-w-full inline-block align-middle">
            <div className="overflow-hidden rounded-xl">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead>
                  <tr className="bg-slate-100">
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs border border-slate-200 font-medium text-gray-500 uppercase"
                    >
                      İŞ BİRLİĞİ YAPILAN KURUMLAR
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white  hover:bg-gray-100 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-slate-200 text-gray-800 ">
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
                      className="px-6 py-3 text-left text-xs border border-slate-200 font-medium text-gray-500 uppercase"
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
    </div>
  );
};

export default Sehirler;
