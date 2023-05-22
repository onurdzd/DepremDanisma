import { useNavigate } from "react-router-dom";

const AnaSayfaSolMenu = () => {
  let sehir = useNavigate();
  return (
    <div className="">
      <div className=" mx-10 w-[18vw] h-[50%vh] text-center   ">
        {" "}
        <button
          onClick={() => sehir("/gaziantep")}
          className="w-[17vw]   my-1 text-center text-slate-800  border-solid border-cyan-700 border-x-4 border-y-2  rounded-lg hover:bg-cyan-700 hover:text-white  focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          GAZİANTEP
        </button>
        <button
          onClick={() => sehir("/adiyaman")}
          className="w-[17vw]  my-1 text-center text-slate-800  border-solid border-cyan-700 border-x-4 border-y-2  rounded-lg hover:bg-cyan-700 hover:text-white focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          ADIYAMAN
        </button>
        <button
          onClick={() => sehir("/kahramanmaras")}
          className="w-[17vw]  my-1 text-center text-slate-800  border-solid border-cyan-700 border-x-4 border-y-2  rounded-lg hover:bg-cyan-700 hover:text-white focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          KAHRAMANMARAŞ
        </button>
        <button
          onClick={() => sehir("/malatya")}
          className="w-[17vw]  my-1 text-center text-slate-800  border-solid border-cyan-700 border-x-4 border-y-2  rounded-lg hover:bg-cyan-700  hover:text-white focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          MALATYA
        </button>
        <button
          onClick={() => sehir("/diyarbakir")}
          className="w-[17vw]  my-1 text-center text-slate-800  border-solid border-cyan-700 border-x-4 border-y-2  rounded-lg hover:bg-cyan-700  hover:text-white focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          DİYARBAKIR
        </button>
        <button
          onClick={() => sehir("/sanliurfa")}
          className="w-[17vw]  my-1 text-center text-slate-800  border-solid border-cyan-700 border-x-4 border-y-2  rounded-lg hover:bg-cyan-700  hover:text-white focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          ŞANLIURFA
        </button>
        <button
          onClick={() => sehir("/kilis")}
          className="w-[17vw]  my-1 text-center text-slate-800  border-solid border-cyan-700 border-x-4 border-y-2  rounded-lg hover:bg-cyan-700  hover:text-white focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          KİLİS
        </button>
        <button
          onClick={() => sehir("/hatay")}
          className="w-[17vw] my-1 text-center text-slate-800  border-solid border-cyan-700 border-x-4 border-y-2  rounded-lg hover:bg-cyan-700  hover:text-white focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          HATAY
        </button>
        <button
          onClick={() => sehir("/adana")}
          className="w-[17vw] my-1 text-center text-slate-800  border-solid border-cyan-700 border-x-4 border-y-2  rounded-lg hover:bg-cyan-700  hover:text-white focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          ADANA
        </button>
        <button
          onClick={() => sehir("/osmaniye")}
          className="w-[17vw]  my-0 text-center text-slate-800  border-solid border-cyan-700 border-x-4 border-y-2  rounded-lg hover:bg-cyan-700  hover:text-white focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          OSMANİYE
        </button>
      </div>
    </div>
  );
};

export default AnaSayfaSolMenu;
