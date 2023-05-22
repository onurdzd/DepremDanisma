import { Fragment, useState } from "react";
import { Menu, Transition, Listbox } from "@headlessui/react";
import {
  ChevronDownIcon,
  CheckIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/20/solid";
const sehirler = [
  { name: "Gaziantep" },
  { name: "Kilis" },
  { name: "Osmaniye" },
  { name: "Adana" },
  { name: "Kahramanmaraş" },
  { name: "Adıyaman" },
  { name: "Malatya" },
  { name: "Hatay" },
  { name: "Diyarbakır" },
  { name: "Şanlıurfa" },
];
const DanismanEkle = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [selected, setSelected] = useState(sehirler[0]);
  return (
    <div className="w-3/4 mx-auto">
      <section className="flex min-h-min bg-cover  border rounded-2xl border-solid bg-[url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]  ">
        <div className="w-[40vw] flex flex-col items-center justify-center">
          <Menu as="div" className="relative inline-block text-center">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Şehir Listesi
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
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
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Diyarbakır
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
                        Kilis
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
                        Şanlıurfa
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <div className="text-white text-xl">Danışman Listesi</div>
        </div>

        <div className="flex flex-col min-h-min border border-solid item bg-black/60 w-[60vw]">
          <div className="container flex flex-col items-center flex-1 px-5 py-6 mx-auto">
            <div className="flex-1 lg:flex lg:items-center ">
              <div className="lg:mx-1">
                <div className="w-full px-16 py-5 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                  <h1 className="text-x font-medium text-gray-700 dark:text-gray-200">
                    Danışman Kayıt Formu
                  </h1>
                  <form className="mt-3">
                    <div className="-mx-2 md:items-center md:flex">
                      <div className="flex-1 px-2">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Danışman Adı:
                        </label>
                        <input
                          type="text"
                          placeholder="Ad "
                          className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                      <div className="flex-1 px-2 mt-4 md:mt-0">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Danışman Soyadı:
                        </label>
                        <input
                          type="text"
                          placeholder="Soyad"
                          className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                    </div>
                    <div className="flex-1 mt-3">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Cep Telefonu :
                      </label>
                      <input
                        type="tel"
                        placeholder=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="flex-1 mt-3">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        E-Posta:
                      </label>
                      <input
                        type="email"
                        placeholder="johndoe@example.com"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div className=" top-16 mt-3 max-w-6xl">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Bölge Seç:
                      </label>
                      <Listbox value={selected} onChange={setSelected}>
                        <div className="relative mt-3">
                          <Listbox.Button className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            <span className="block truncate text-left">
                              {selected.name}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>
                          <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {sehirler.map((person, personIdx) => (
                                <Listbox.Option
                                  key={personIdx}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                      active
                                        ? "bg-amber-100 text-amber-900"
                                        : "text-gray-900"
                                    }`
                                  }
                                  value={person}
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${
                                          selected
                                            ? "font-medium"
                                            : "font-normal"
                                        }`}
                                      >
                                        {person.name}
                                      </span>
                                      {selected ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                          <CheckIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </Listbox>
                    </div>
                    <div className="w-full mt-3">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Adres:
                      </label>
                      <textarea
                        className="block w-full h-10 px-2 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-28 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        placeholder="Mesaj"
                      ></textarea>
                    </div>
                    <button className="w-full px-3 py-3 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                      Danışan Kaydet
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DanismanEkle;
