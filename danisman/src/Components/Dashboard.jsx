import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let sehir = useNavigate();
  return (
    <div className="">
      <div className=" bg-slate-100 w-[20vw] h-[60%vh] text-center border rounded-3xl border-solid border-cyan-900  ">
        {" "}
        <button
          onClick={() => sehir("/gaziantep")}
          className="mt-2  w-[17vw]  text-center text-white border border-solid bg-cyan-600 rounded-xl hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          GAZİANTEP
        </button>
        <button
          onClick={() => sehir("/adiyaman")}
          className="mt-2  w-[17vw]  text-center text-white border border-solid bg-cyan-600 rounded-xl hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          ADIYAMAN
        </button>
        <button
          onClick={() => sehir("/kahramanmaras")}
          className="mt-2  w-[17vw]  text-center text-white border border-solid bg-cyan-600 rounded-xl hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          KAHRAMANMARAŞ
        </button>
        <button
          onClick={() => sehir("/malatya")}
          className="mt-2  w-[17vw]  text-center text-white border border-solid bg-cyan-600 rounded-xl hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          MALATYA
        </button>
        <button
          onClick={() => sehir("/diyarbakir")}
          className="mt-2  w-[17vw]  text-center text-white border border-solid bg-cyan-600 rounded-xl hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          DİYARBAKIR
        </button>
        <button
          onClick={() => sehir("/sanliurfa")}
          className="mt-2  w-[17vw]  text-center text-white border border-solid bg-cyan-600 rounded-xl hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          ŞANLIURFA
        </button>
        <button
          onClick={() => sehir("/kilis")}
          className="mt-2  w-[17vw]  text-center text-white border border-solid bg-cyan-600 rounded-xl hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          KİLİS
        </button>
        <button
          onClick={() => sehir("/hatay")}
          className="mt-2  w-[17vw]  text-center text-white border border-solid bg-cyan-600 rounded-xl hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          HATAY
        </button>
        <button
          onClick={() => sehir("/adana")}
          className="mt-2  w-[17vw]  text-center text-white border border-solid bg-cyan-600 rounded-xl hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          ADANA
        </button>
        <button
          onClick={() => sehir("/osmaniye")}
          className="mt-2  w-[17vw]  text-center text-white border border-solid bg-cyan-600 rounded-xl hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          OSMANİYE
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
