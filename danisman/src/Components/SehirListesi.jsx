import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SehirListesi() {
  const { sehir } = useParams();
  const [merkezler, setMerkezler] = useState();

  let ilkHarfBuyukSehir;
  if (sehir) {
    ilkHarfBuyukSehir = sehir.charAt(0).toUpperCase() + sehir.slice(1);
  }

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/merkez`)
      .then((res) =>
        setMerkezler(
          res.data?.filter((elem) => elem.sehir_isim == ilkHarfBuyukSehir)
        )
      );
  }, []);

  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="font-bold text-xl mb-2">
        <h1>Şehir Listesi</h1>
      </div>
    {merkezler?.map((item,index)=>
    <>{sehir && sehir != item.merkez_isim ? (
        "") : <div key={index} className="cursor-pointer hover:scale-105 hover:bg-[#fff] hover:text-[#2a379b] bg-[#2a379b] min-w-[200px] mb-2 text-center rounded-xl font-sans font-bold text-[#FFF]"
        onClick={() => navigate(`/sehirler/${item.merkez_isim}`)}>{item.merkez_isim}</div>}</>)}

      {/* {sehir && sehir != "adana" ? (
        ""
      ) : (
        <div
          className="cursor-pointer hover:scale-105 hover:bg-[#fff] hover:text-[#2a379b] bg-[#2a379b] min-w-[200px] mb-2 text-center rounded-xl font-sans font-bold text-[#FFF]"
          onClick={() => navigate("/sehirler/adana")}
        >
          ADANA
        </div>
      )}
      {sehir && sehir != "adiyaman" ? (
        ""
      ) : (
        <div
          className="cursor-pointer hover:scale-105 hover:bg-[#fff] hover:text-[#2a379b] bg-[#2a379b] min-w-[200px] mb-2 text-center rounded-xl font-sans font-bold text-[#FFF]"
          onClick={() => navigate("/sehirler/adiyaman")}
        >
          ADIYAMAN
        </div>
      )}
      {sehir && sehir != "diyarbakir" ? (
        ""
      ) : (
        <div
          className="cursor-pointer hover:scale-105 hover:bg-[#fff] hover:text-[#2a379b] bg-[#2a379b] min-w-[200px] mb-2 text-center rounded-xl font-sans font-bold text-[#FFF]"
          onClick={() => navigate("/sehirler/diyarbakir")}
        >
          DİYARBAKIR
        </div>
      )}
      {sehir && sehir != "gaziantep" ? (
        ""
      ) : (
        <div
          className="cursor-pointer hover:scale-105 hover:bg-[#fff] hover:text-[#2a379b] bg-[#2a379b] min-w-[200px] mb-2 text-center rounded-xl font-sans font-bold text-[#FFF]"
          onClick={() => navigate("/sehirler/gaziantep")}
        >
          GAZİANTEP
        </div>
      )}
      {sehir && sehir != "hatay" ? (
        ""
      ) : (
        <div
          className="cursor-pointer hover:scale-105 hover:bg-[#fff] hover:text-[#2a379b] bg-[#2a379b] min-w-[200px] mb-2 text-center rounded-xl font-sans font-bold text-[#FFF]"
          onClick={() => navigate("/sehirler/hatay")}
        >
          HATAY
        </div>
      )}
      {sehir && sehir != "kahramanmaras" ? (
        ""
      ) : (
        <div
          className="cursor-pointer hover:scale-105 hover:bg-[#fff] hover:text-[#2a379b] bg-[#2a379b] min-w-[200px] mb-2 text-center rounded-xl font-sans font-bold text-[#FFF]"
          onClick={() => navigate("/sehirler/kahramanmaras")}
        >
          KAHRAMANMARAŞ
        </div>
      )}
      {sehir && sehir != "kilis" ? (
        ""
      ) : (
        <div
          className="cursor-pointer hover:scale-105 hover:bg-[#fff] hover:text-[#2a379b] bg-[#2a379b] min-w-[200px] mb-2 text-center rounded-xl font-sans font-bold text-[#FFF]"
          onClick={() => navigate("/sehirler/kilis")}
        >
          KİLİS
        </div>
      )}
      {sehir && sehir != "malatya" ? (
        ""
      ) : (
        <div
          className="cursor-pointer hover:scale-105 hover:bg-[#fff] hover:text-[#2a379b] bg-[#2a379b] min-w-[200px] mb-2 text-center rounded-xl font-sans font-bold text-[#FFF]"
          onClick={() => navigate("/sehirler/malatya")}
        >
          MALATYA
        </div>
      )}
      {sehir && sehir != "osmaniye" ? (
        ""
      ) : (
        <div
          className="cursor-pointer hover:scale-105 hover:bg-[#fff] hover:text-[#2a379b] bg-[#2a379b] min-w-[200px] mb-2 text-center rounded-xl font-sans font-bold text-[#FFF]"
          onClick={() => navigate("/sehirler/osmaniye")}
        >
          OSMANİYE
        </div>
      )}
      {sehir && sehir != "sanliurfa" ? (
        ""
      ) : (
        <div
          className="cursor-pointer hover:scale-105 hover:bg-[#fff] hover:text-[#2a379b] bg-[#2a379b] min-w-[200px] mb-2 text-center rounded-xl font-sans font-bold text-[#FFF]"
          onClick={() => navigate("/sehirler/sanliurfa")}
        >
          ŞANLIURFA
        </div>
      )} */}
    </div>
  );
}
