import { useEffect, useState } from "react";
import GridTableEnvanter from "./GridTables/GridTableEnvanter";
import GridTablePersonel from "./GridTables/GridTablePersonel";
import GridTableMerkez from "./GridTables/GridTableMerkez";
import GridTableKurum from "./GridTables/GridTableKurum";
import GridTableSehir from "./GridTables/GridTableSehir";
import GridTableHizmet from "./GridTables/GridTableHizmet";
import axios from "axios";
import TableHeader from "./TableHeader"
import Footer from "./Footer";

const Dashboard = () => {
  const [sayfaAdi, setSayfaAdi] = useState("");

  const [localToken, setLocalToken] = useState(JSON.parse(localStorage.getItem("user")))
  const localTokenCheck = async () => {
    await axios
      .get(`${import.meta.env.VITE_API_URL}/auth`, {
        headers: {
          'Authorization': `${localToken?.token}`
        }
      })
      .then((res) => {
        res.data &&
        setLocalToken(JSON.parse(localStorage.getItem("user")));
      })
  }

  useEffect(() => { localTokenCheck() }, [])

  return (
    <>
      <div className="bg-slate-100 p-4 h-[90vh] rounded-[2rem] ">
        <div className="p-2 flex flex-col items-center bg-white rounded-[2rem] h-[85vh] overflow-auto w-[90vw] mb-6">
          <div className=" pt-1 bg-white rounded-[2rem]  ">
            <TableHeader />
          </div>
          <div className="flex flex-col w-full h-[60vh] bg-white border-2 rounded-[1rem] ">
            {localToken ? (
              <>
                <div className="font-thin text-xs pb-2 text-right mr-2 ">
                  * ADAK-Acil Durumlarda Aranacak Kişi
                </div>
                <div className="h-full">
                  <div className="flex mb-2 justify-center rounded-none border-b-8 border-blue-gray-50 bg-transparent p-0 font-bold">
                    <div className="ml-5  mx-12 text-xl px-8 text-gray-600  dark:text-gray-800  rounded-xl hover:bg-slate-700 hover:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 ">
                      <button>
                        <a onClick={() => setSayfaAdi("merkeztablo")}>Merkez Tablo</a>
                      </button>
                    </div>
                    <div className=" ml-5  mx-12 text-xl px-8  text-gray-600 dark:text-gray-800 rounded-xl hover:bg-slate-700 hover:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                      <button>
                        <a onClick={() => setSayfaAdi("personeltablo")}>
                          Personel Tablo
                        </a>
                      </button>
                    </div>
                    <div className="ml-5 mx-12 text-xl px-8 text-gray-600 dark:text-gray-800   rounded-xl hover:bg-slate-700 hover:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 ">
                      <button>
                        <a onClick={() => setSayfaAdi("envantertablo")}>
                          Envanter Tablo
                        </a>
                      </button>
                    </div>
                    <div className="ml-5  mx-12 text-lg px-8 text-gray-600 dark:text-gray-800   rounded-xl hover:bg-slate-700 hover:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 ">
                      <button>
                        <a onClick={() => setSayfaAdi("kurumtablo")}>Kurum Tablo</a>
                      </button>
                    </div>
                    <div className="ml-5  mx-12 text-lg px-8 text-gray-600 dark:text-gray-800   rounded-xl hover:bg-slate-700 hover:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 ">
                      <button>
                        <a onClick={() => setSayfaAdi("hizmettablo")}>Hizmet Tablo</a>
                      </button>
                    </div>
                    <div className="ml-5  mx-12 text-lg px-8 text-gray-600 dark:text-gray-800   rounded-xl hover:bg-slate-700 hover:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 ">
                      <button>
                        <a onClick={() => setSayfaAdi("sehirtablo")}>Şehir Tablo</a>
                      </button>
                    </div>
                  </div>
                  {sayfaAdi == "" ? (
                    <div className="text-xl mt-[-2rem] font-bold text-center h-full flex flex-col justify-center">
                      Lütfen üst menüden seçim yapın
                    </div>
                  ) : sayfaAdi == "merkeztablo" ? (
                    <GridTableMerkez localToken={localToken} />
                  ) : sayfaAdi == "personeltablo" ? (
                    <GridTablePersonel localToken={localToken} />
                  ) : sayfaAdi == "envantertablo" ? (
                    <GridTableEnvanter localToken={localToken} />
                  ) : sayfaAdi == "kurumtablo" ? (
                    <GridTableKurum localToken={localToken} />
                  ) : sayfaAdi == "hizmettablo" ? (
                    <GridTableHizmet localToken={localToken} />
                  ) : sayfaAdi == "sehirtablo" ? (
                    <GridTableSehir localToken={localToken} />
                  ) : null}
                </div>
              </>
            ) : (
              <div className="flex justify-center h-full items-center font-bold text-xl bg-slate-100 ">
                Dashboard ekranına ulaşmak için önce giriş yapın
              </div>
            )}  </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
