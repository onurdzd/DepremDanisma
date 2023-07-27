import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SehirListesi() {
  const { sehir } = useParams();
  const [merkezler, setMerkezler] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/sehir`)
      .then((res) =>
      setMerkezler(res.data)
      );
  }, []);

  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="font-bold text-xl mb-2">
        <h1>Şehir Listesi</h1>
      </div>
    {merkezler?.map((item,index)=>
    <>{sehir && sehir != item.sehir_isim ? (
        "") : <div key={index} className="cursor-pointer hover:scale-105 hover:bg-[#fff] hover:text-[#2a379b] bg-[#2a379b] min-w-[200px] mb-2 text-center rounded-xl font-sans font-bold text-[#FFF]"
        onClick={() => navigate(`/sehirler/${item.sehir_isim}`)}>{item.sehir_isim}</div>}</>)}
    </div>
  );
}
