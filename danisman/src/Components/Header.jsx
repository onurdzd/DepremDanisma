import "react-toastify/dist/ReactToastify.css";
import Login from "./Login";
import { IoMapSharp, IoSettingsSharp } from "react-icons/io5";
import { RiHandHeartFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import Logo from "../assets/Logo.svg";
import Group from "../assets/Group.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="flex flex-col justify-between gap-y-5 mt-10 md:mt-5">
      <div className="ml-5">
        <Link to={"/"}>
          <img className="max-w-[150px]" src={Logo} />
        </Link>
        <button
          className="block md:hidden basis-1/3 text-5xl  text-blue-300 focus:outline-none"
          onClick={props.toggleMenu}>
          &#8801;
        </button>
      </div>
      <div
        className={`md:flex flex flex-col grow justify-around ${props.isMenuOpen ? "block" : "hidden"}`} >
        <div className="ml-6 flex flex-col gap-2">

          <Link to={"/"}>
            <div className="px-3 py-1 flex text-xs tracking-wider text-theme-dark rounded-lg border-spacing-8 hover:bg-amber-300 hover:bg-opacity-30">
              <IoMapSharp className="mr-2 h-5 w-5 text-amber-300" />
              Anasayfa
            </div>
          </Link>
          <Link to={"/hakkimizda"}>
            <div className="px-3 py-1 flex text-xs tracking-wider text-theme-dark rounded-lg border-spacing-8 hover:bg-amber-300 hover:bg-opacity-30">
              <IoSettingsSharp className="mr-2 h-5 w-5 text-amber-300" />
              Hakkımızda
            </div>
          </Link>
          <Link to={"/"}>
            <div className="px-3 py-1 flex text-xs tracking-wider text-theme-dark rounded-lg border-spacing-8 hover:bg-amber-300 hover:bg-opacity-30">
              <RiHandHeartFill className="mr-2 h-5 w-5 text-amber-300" />
              Gönüllü Ol
            </div>
          </Link>
          <Link to={"/"}>
            <div className="px-3 py-1 flex text-xs tracking-wider text-theme-dark rounded-lg border-spacing-8 hover:bg-amber-300 hover:bg-opacity-30">
              <BsFillTelephoneFill className="mr-2 h-5 w-5 text-amber-300" />
              İletişim
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden md:block bg-amber-300 pt-0.5 bg-opacity-30 rounded-2xl p-5">
        <Link to={"/basvuru"}>
          <div
            className="py-3 my-5 text-center bg-amber-300 rounded-xl text-xs font-bold text-blue-900"
          >
            DESTEK İSTER MİSİN?
          </div>
          <img
            className=""
            src={Group}
          />
        </Link>
      </div>
      <div className="hidden md:block text-[10px] bg-slate-100 rounded-2xl py-3 px-5 font-extralight">
        İstanbul Bilgi Üniversitesi Travma ve Afet
        Ruh Sağlığı Programı İşbirliği ile
      </div>
    </header >
  );
};

export default Header;
