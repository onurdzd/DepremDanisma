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
    <header className="basis-11/12 ">
      <div className="mx-5 flex flex-col">
        <div className="ml-7 mt-5">
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
          className={`md:flex flex flex-col justify-around my-5 ${props.isMenuOpen ? "block" : "hidden"}`} >
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
        <div className="hidden md:block ">
          <div className="flex flex-col justify-around  ">
            <div className=" bg-amber-300 bg-opacity-30 max-h-80  mt-5 rounded-3xl">
              <Link to={"/basvuru"}>
                <a
                  href={"/basvuru"}
                  className="mt-4 mx-11 px-1 w-max py-2 bg-amber-300 rounded-xl inline-block text-xs font-bold text-blue-900"
                >
                  Destek İster Misin?
                </a>
              </Link>
              <img
                className="max-h-[20rem]  py-2 px-8  min-h-full min-w-full  "
                src={Group}
              />
            </div>
            <div className="text-xs text-center mt-3 bg-slate-100 rounded-2xl py-3  font-extralight">
              İstanbul Bilgi Üniversitesi Travma ve Affet <br />
              Ruh Sağlığı Programı İşbirliği ile
            </div>
          </div>
        </div>
      </div >
    </header >
  );
};

export default Header;
