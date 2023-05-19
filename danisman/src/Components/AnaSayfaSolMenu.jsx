import { useNavigate } from "react-router-dom";

const AnaSayfaSolMenu=()=>{
    let sehir = useNavigate();
    return(
        <div className="">
        <div className=" bg-slate-100 w-[20vw] h-[60%vh] text-center border rounded-3xl border-solid border-red-600  ">
          {" "}
          <button
            onClick={() => sehir("/gaziantep")}
            className="mt-2  w-[17vw] bg-red-500 text-center text-white border border-solid border-blue-600 rounded-xl"
          >
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
          <button className="mt-2 mb-2 w-[17vw] bg-red-500 text-white border border-solid border-blue-600 rounded-xl">
            OSMANİYE
          </button>
        </div>
      </div>
    )
}

export default AnaSayfaSolMenu