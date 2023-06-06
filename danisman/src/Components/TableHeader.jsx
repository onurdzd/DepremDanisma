import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Login";
import { IoMapSharp, IoSettingsSharp } from "react-icons/io5";
import { RiHandHeartFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <div className="flex text-xl w-full items-center">
      <div className=" mx-10 flex w-full ">
        <div className="ml-7 flex w-full items-center">
          <a href="/">
            <img className="max-h-[125px] py-4" src="logo2.jpg" />
          </a>
          <div>
            <p className="text-5xl font-mono font-normal text-opacity-90 text-[#162270]">
              Affan
            </p>
            <p className="text-base font-thin font-mono">
              Psikososyal Destek Projesi{" "}
            </p>
          </div>
        </div>
        <div className="flex  mt-4 w-full ">
          <div className="mt-4 ml-6 flex w-full ">
            <div className="flex justify-end w-full items-center text-blue-300 ">
              <div className="mb-2">
                <a
                  href={"/"}
                  className="flex items-center px-8 font-normal text-base text-[#5161c5]   rounded-3xl border-solid border-slate-950 border-spacing-8 hover:bg-amber-300 hover:bg-opacity-30"
                >
                  <IoMapSharp className="inline-block mr-2 h-5 w-5 text-blue-950" />
                  Harita Bilgileri
                </a>
              </div>
              <div className="mb-2">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="flex items-center px-8  font-normal text-base text-[#5161c5]   rounded-3xl border-solid border-slate-950 border-spacing-8 hover:bg-amber-300 hover:bg-opacity-30">
                      <IoSettingsSharp className="inline-block mr-2 h-5 w-5 text-amber-300" />
                      Sistem Ayarları
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
                </Menu>
              </div>
              <div className="mb-2">
                <a
                  href={"/"}
                  className="flex items-center px-8 font-normal text-base text-[#5161c5]   rounded-3xl border-solid border-slate-950 border-spacing-8 hover:bg-amber-300 hover:bg-opacity-30"
                >
                  <RiHandHeartFill className="inline-block mr-2 h-5 w-5 text-amber-300" />
                  Gönüllüler
                </a>
              </div>
              <div className="mb-2">
                <a
                  href={"/iletisim"}
                  className="flex items-center px-8 font-normal text-base text-[#5161c5]   rounded-3xl border-solid border-slate-950 border-spacing-8 hover:bg-amber-300 hover:bg-opacity-30"
                >
                  <BsFillTelephoneFill className="inline-block mr-2 h-5 w-5 text-amber-300" />
                  İletişim
                </a>
              </div>
              <div className="mb-2">
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
      </div>
    </div>
  );
};

export default Header;
