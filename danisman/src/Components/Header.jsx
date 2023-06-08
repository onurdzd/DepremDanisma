// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Login";
import { IoMapSharp, IoSettingsSharp } from "react-icons/io5";
import { RiHandHeartFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

const Header = () => {

  return (
    <header className=" text-xl basis-11/12 ">
      <div className=" mx-5 flex flex-col">
        <div className="ml-7 ">
          <a href="/">
            <img className="max-h-[125px] py-4" src="logo2.jpg" />
          </a>
          <p className="text-4xl font-mono font-normal text-opacity-90 text-[#162270]">
            Affan
          </p>
          <p className="text-sm font-thin font-mono ">
            Psikososyal <br /> Destek Projesi{" "}
          </p>
        </div>
        <div className="flex flex-col justify-around mt-5  ">
          <div className="ml-6 flex flex-row">
            <div className="  text-blue-300  ">
              <div className="mb-2">
                <a
                  href={"/"}
                  className="px-8 py-1  font-normal text-sm text-[#5161c5]   rounded-3xl border-solid border-slate-950 border-spacing-8 hover:bg-amber-300 hover:bg-opacity-30"
                >
                  <IoMapSharp className="inline-block mr-1 h-5 w-5 text-blue-950" />
                  Anasayfa
                </a>
              </div>
              <div className="mb-2 ">
              <div className="mb-2">
                <a
                  href={"/hakkimizda"}
                  className="px-8 py-1  font-normal text-sm text-[#5161c5]   rounded-3xl border-solid border-slate-950 border-spacing-8 hover:bg-amber-300 hover:bg-opacity-30"
                >
                  <IoSettingsSharp className="inline-block mr-1 h-5 w-5 text-amber-300" />
                  Hakkımızda
                </a>
              </div>
                {/* <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="px-8 py-1  font-normal text-sm text-[#5161c5]   rounded-3xl border-solid border-slate-950 border-spacing-8 hover:bg-amber-300 hover:bg-opacity-30">
                      <IoSettingsSharp className="inline-block mr-1 h-5 w-5 text-amber-300" />
                      Biz Kimiz?
                      <ChevronDownIcon
                        className="-mr-4 h-5 w-5 text-gray-400 inline"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-24 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="https://tarde.org.tr/wp-content/uploads/2018/11/travma-ve-afet-ruh-sagligi-calismalari-dernegi.pdf"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Tüzük
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="https://tarde.org.tr/yonetim-kurulu/"
                              target="_blank"
                              rel="noreferrer"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Yönetim Kurulu
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="https://tarde.org.tr/uyelerimiz/"
                              target="_blank"
                              rel="noreferrer"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Üyelerimiz
                            </a>
                          )}
                        </Menu.Item>
                        <form
                          method="POST"
                          action="https://tarde.org.tr/komiteler/"
                          target="_blank"
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
                                )}
                              >
                                Komisyonlar
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
              <div className="mb-2">
                <a
                  href={"/"}
                  className="px-8 py-1  font-normal text-sm text-[#5161c5]   rounded-3xl border-solid border-slate-950 border-spacing-8 hover:bg-amber-300 hover:bg-opacity-30"
                >
                  <RiHandHeartFill className="inline-block mr-1 h-5 w-5 text-amber-300" />
                  Gönüllü Ol
                </a>
              </div>
              <div className="mb-2">
                <a
                  href={"/iletisim"}
                  className="px-8 py-1  font-normal text-sm text-[#5161c5]   rounded-3xl border-solid border-slate-950 border-spacing-8 hover:bg-amber-300 hover:bg-opacity-30"
                >
                  <BsFillTelephoneFill className="inline-block mr-1 h-5 w-5 text-amber-300" />
                  İletişim
                </a>
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
        <div className="flex flex-col justify-around ">
          <div className=" bg-amber-300 bg-opacity-30 max-h-80  mt-5 rounded-3xl">
            <button className="mt-4 mx-11 px-1 w-max py-2 bg-amber-300 rounded-xl inline-block text-xs font-bold text-blue-900">
              Destek İster Misin?
            </button>
            <img
              className="max-h-[20rem] py-2 px-8  min-h-full min-w-full  "
              src="Group.png
            "
            />
          </div>
          <div className="text-xs text-center mt-1 bg-slate-100 rounded-2xl py-2  font-extralight">
            İstanbul Bilgi Üniversitesi Travma ve Affet <br />
            Ruh Sağlığı Programı İşbirliği ile
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
