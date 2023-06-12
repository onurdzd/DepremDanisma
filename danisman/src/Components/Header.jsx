import { ToastContainer } from "react-toastify";
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
    <header className=" text-xl basis-11/12 ">
      <div className=" mx-5 flex flex-col">
        <div className="ml-7 flex  ">
            <a href="/" className="basis-2/3">
              <img className="max-h-[200px] mt-2 py-4 " src={Logo} />
            </a>
          <button
            className="block md:hidden basis-1/3 text-5xl  text-blue-300 focus:outline-none"
            onClick={props.toggleMenu}
          >
            &#8801;
          </button>
        </div>
        <div
          className={`md:flex flex flex-col justify-around mt-5 ${
            props.isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="ml-6 flex flex-row ">
            <div className="  text-blue-300   ">
              <div className="mb-2">
                <Link to={"/"}>
                  <a
                    href={"/"}
                    className="px-8 py-1  font-normal text-sm text-[#5161c5]   rounded-3xl border-solid border-slate-950 border-spacing-8 hover:bg-amber-300 hover:bg-opacity-30"
                  >
                    <IoMapSharp className="inline-block mr-1 h-5 w-5 text-blue-950" />
                    Anasayfa
                  </a>
                </Link>
              </div>
              <div className="mb-2 ">
                <div className="mb-2">
                  <Link to={"/hakkimizda"}>
                    <a
                      href={"/hakkimizda"}
                      className="px-8 py-1  font-normal text-sm text-[#5161c5]   rounded-3xl border-solid border-slate-950 border-spacing-8 hover:bg-amber-300 hover:bg-opacity-30"
                    >
                      <IoSettingsSharp className="inline-block mr-1 h-5 w-5 text-amber-300" />
                      Hakkımızda
                    </a>
                  </Link>
                </div>
              </div>
              <div className="mb-2">
                <Link to={"/gonullu"}>
                  <a
                    href={"/gonullu"}
                    className="px-8 py-1  font-normal text-sm text-[#5161c5]   rounded-3xl border-solid border-slate-950 border-spacing-8 hover:bg-amber-300 hover:bg-opacity-30"
                  >
                    <RiHandHeartFill className="inline-block mr-1 h-5 w-5 text-amber-300" />
                    Gönüllü Ol
                  </a>
                </Link>
              </div>
              <div className="mb-2">
                <Link to={"/iletisim"}>
                  <a
                    href={"/iletisim"}
                    className="px-8 py-1  font-normal text-sm text-[#5161c5]   rounded-3xl border-solid border-slate-950 border-spacing-8 hover:bg-amber-300 hover:bg-opacity-30"
                  >
                    <BsFillTelephoneFill className="inline-block mr-1 h-5 w-5 text-amber-300" />
                    İletişim
                  </a>
                </Link>
              </div>
              <div className="mb-5">
                <Login />
              </div>
              <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
              />
            </div>
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
      </div>
    </header>
  );
};

export default Header;
