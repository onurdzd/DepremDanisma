import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Login from "./Login";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  return (
    <>
      <header className="text-xl w-screen bg-white mx-auto ">
        <div className="flex justify-around flex-auto mx-10 ">
          <div className=" basis-1/5">
            <img className="max-h-28 py-2" src="logo.jpg" />
          </div>

          <div className="flex flex-col justify-around  ">
            <div className="mt-6">
              <div className=" flex text-blue-300  ">
                <a
                  href={"/"}
                  className="px-6 py-1 ml-10 font-light text-lg text-zinc-800 bg-slate-100 rounded-3xl border-solid border-slate-900 shadow-sm border-spacing-8 hover:bg-sky-700"
                >
                  Anasayfa
                </a>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="px-6 pt-1 ml-10 font-light text-lg text-zinc-800 bg-slate-100 rounded-3xl shadow-sm border-solid border-slate-900 border-spacing-8 hover:bg-sky-700">
                      Biz Kimiz?
                      <ChevronDownIcon
                        className="-mr-1 h-5 w-5 text-gray-400 inline"
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                              href="#"
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
                              href="#"
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
                        <form method="POST" action="#">
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
                <Login />
              </div>
            </div>
            <div className=" flex  flex-row-reverse basis-8">
              <a href="#">
                <FontAwesomeIcon className="pr-2 pt-2" icon={faEnvelope} />
              </a>
              <a
                href="https://www.instagram.com/tardeorgtr/?hl=tr"
                target="_blank"
              >
                <FontAwesomeIcon className="pr-5 pt-2" icon={faInstagram} />
              </a>
              <a href="https://www.facebook.com/tardeorgtr/" target="_blank">
                <FontAwesomeIcon className="pr-5 pt-2" icon={faFacebook} />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
