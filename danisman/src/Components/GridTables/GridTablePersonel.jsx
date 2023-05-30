import { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { BsFillFileArrowDownFill, BsFillFileArrowUpFill } from "react-icons/bs";
import { BiSave, BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { BiX } from "react-icons/bi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const GridTablePersonel = () => {
  const [data, setData] = useState([]);
  const [editToggle, setEditToggle] = useState(false);
  const [newPersonelToggle, setNewPersonelToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortToggle, setSortToggle] = useState(true);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handleClickPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleScroll = (event) => {
    const { scrollLeft } = event.target;
    setScrollPosition(scrollLeft);
  };

  const [merkezIsimAl,setMerkezIsimAl]=useState([])
  let merkezIsimleri = [];
  useEffect(()=>{
    axios
    .get("http://localhost:9000/api/merkez")
    .then((res) => setMerkezIsimAl(res.data));
  },[])

  merkezIsimAl.map(item=>merkezIsimleri.push({
    merkez_id: item.merkez_id,
    merkez_isim: item.merkez_isim,
  })
);
  
  const uniqueMerkez = [];

  const unique = merkezIsimleri.filter((element) => {
    const isDuplicate = uniqueMerkez.includes(element.merkez_id);
    if (!isDuplicate) {
      uniqueMerkez.push(element.merkez_id);
      return true;
    }
    return false;
  });

  const dataAl = async () =>
    await axios
      .get("http://localhost:9000/api/personel")
      .then((res) => setData(res.data));

  useEffect(() => {
    dataAl();
  }, []);

  // Düzenleme durumunu tutmak için state
  const [editingRowId, setEditingRowId] = useState(null);

  // Yeni satır verilerini tutmak için state
  const [newRowData, setNewRowData] = useState({
    firstname: "",
    surname: "",
    p_telefon1: "",
    p_telefon2: "",
    TC: null,
    kan_grubu: "",
    ikamet_adresi: "",
    calisma_durumu: null,
    proje_saha_adresi: "",
    ADAK_adı_soyadı: "",
    ADAK_telefon: null,
    ADAK_Bağı: "",
    merkez_id: null,
  });

  // Satır düzenlemesini başlatan fonksiyon
  const startEditing = (rowId) => {
    setEditingRowId(rowId);
    setEditToggle(true);
  };

  // Satır düzenlemesini bitiren fonksiyon
  const stopEditing = () => {
    setEditingRowId(null);
    setEditToggle(false);
  };

  // Satırı güncelleyen fonksiyon
  const updateRow = async (rowId, newData) => {
    await axios.put(`http://localhost:9000/api/personel/${rowId}`, newData);
    dataAl();
  };

  // Satırı silen fonksiyon
  const deleteRow = async (rowId) => {
    await axios.delete(`http://localhost:9000/api/personel/${rowId}`);
    dataAl();
  };
  //düzenleme kapatan
  const cancelEditing = () => {
    setEditingRowId(null);
    setEditToggle(false);
  };
  // Yeni satır ekleme fonksiyonu
  const addRow = async () => {
    const newRow = { ...newRowData };
    await axios.post("http://localhost:9000/api/personel", newRow);
    dataAl();
  };

  //sıralama&filtreleme
  const [sortConfig, setSortConfig] = useState({
    key: "personel_id",
    direction: "asc",
  });
  const [filterValue, setFilterValue] = useState("");

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleFilter = (e) => {
    setFilterValue(e.target.value);
  };

  const filterData = (item) => {
    const filterKeys = Object.keys(item);
    for (let i = 0; i < filterKeys.length; i++) {
      const key = filterKeys[i];
      if (
        item[key]?.toString().toLowerCase().includes(filterValue.toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const filteredData = sortedData.filter(filterData);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div
      className="w-[90vw] p-4 overflow-x-auto flex justify-center"
      onScroll={handleScroll}
    >
      <div
        className="relative w-full"
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        {" "}
        <div className="font-medium text-lg mt-4">
          Database Personel Sayısı:{" "}
          <span className="text-red-400">{data.length}</span>
        </div>
        <div>
          <input
            className="border p-1 mt-2 rounded text-lg font-sans font-bold"
            type="text"
            placeholder="Arama yapın..."
            value={filterValue}
            onChange={handleFilter}
          />
        </div>
        <table className="min-w-full bg-white border border-gray-300 table-fixed ">
          <thead>
            <tr>
              <th className="min-w-[8rem]  px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium ">
                İşlemler
              </th>
              <th className=" min-w-[8rem]  px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium ">
                <div
                  onClick={() => {
                    handleSort("personel_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center justify-center "
                >
                  Personel ID
                  <span className="ml-1 w-1/4 cursor-pointer ">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className=" min-w-[8rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                <div
                  onClick={() => {
                    handleSort("personel_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center justify-center"
                >
                  Ad
                  <span className="ml-1 w-1/4 cursor-pointer ">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className=" min-w-[8rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                <div
                  onClick={() => {
                    handleSort("personel_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center justify-center"
                >
                  Soyad
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className=" min-w-[8rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                <div
                  onClick={() => {
                    handleSort("personel_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center justify-center"
                >
                  Telefon No
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className=" min-w-[8rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                <div
                  onClick={() => {
                    handleSort("personel_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center justify-center"
                >
                  Telefon No-2
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className=" min-w-[8rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                <div
                  onClick={() => {
                    handleSort("personel_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center justify-center"
                >
                  TC Kimlik No
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className=" min-w-[8rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                <div
                  onClick={() => {
                    handleSort("personel_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center justify-center"
                >
                  Kan Grubu
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className=" min-w-[13rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                <div
                  onClick={() => {
                    handleSort("personel_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center justify-center"
                >
                  İkamet Adresi
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className=" min-w-[9rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                <div
                  onClick={() => {
                    handleSort("personel_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center justify-center"
                >
                  Çalışma Durumu
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className=" min-w-[13rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                <div
                  onClick={() => {
                    handleSort("personel_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center justify-center"
                >
                  Proje Saha Adresi
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className=" min-w-[12rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                <div
                  onClick={() => {
                    handleSort("personel_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center justify-center"
                >
                  Acil Durumda Aranacak kişi Adı Soyadı
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className=" min-w-[12rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                <div
                  onClick={() => {
                    handleSort("personel_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center justify-center"
                >
                  Acil Durumda Aranacak kişi telefon no
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className=" min-w-[12rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                <div
                  onClick={() => {
                    handleSort("personel_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center justify-center"
                >
                  Acil Durumda Aranacak kişi Bağı
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className=" min-w-[13rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                <div
                  onClick={() => {
                    handleSort("personel_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center justify-center"
                >
                  Merkez
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          className="text-gray-400  hover:text-slate-200  "
                          size="20"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {paginatedData.map((row, index) => (
              <tr key={index}>
                {" "}
                <td className="px-5  border-b">
                  <div className="flex flex-row ">
                    {editingRowId === row.personel_id ? (
                      <>
                        <button
                          onClick={() => stopEditing()}
                          className="hover:bg-slate-300 hover:text-slate-200  text-white font-bold py-1 px-2 rounded flex-auto"
                        >
                          <BiSave
                            className="text-gray-500  hover:text-gray-700 "
                            size="22"
                          ></BiSave>
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => startEditing(row.personel_id)}
                        className="hover:bg-slate-300  hover:text-slate-200  text-white font-bold py-1 px-2 rounded flex-auto"
                      >
                        <BiEdit
                          className="text-gray-500  hover:text-gray-700 "
                          size="22"
                        ></BiEdit>
                      </button>
                    )}

                    {editingRowId === row.personel_id ? (
                      <button
                        onClick={() => cancelEditing()}
                        className="hover:bg-slate-300 hover:text-slate-200 text-white font-bold py-1 px-2 rounded flex-auto"
                      >
                        <BiX
                          className="text-gray-500 hover:text-gray-700"
                          size="22"
                        ></BiX>
                      </button>
                    ) : (
                      <button
                        onClick={() => deleteRow(row.personel_id)}
                        className=" hover:bg-slate-300 hover:text-slate-200  text-white font-bold py-1 px-2 rounded flex-auto"
                      >
                        <MdDeleteOutline
                          className="text-gray-500  hover:text-gray-700 "
                          size="23"
                        ></MdDeleteOutline>
                      </button>
                    )}
                  </div>
                </td>
                <td className="px-5  border-b">{row.personel_id}</td>
                <td className="px-5  border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="text"
                      value={row.firstname}
                      onChange={(e) =>
                        updateRow(row.personel_id, {
                          firstname: e.target.value,
                        })
                      }
                      className="border rounded border-yellow-500 px-1 "
                    />
                  ) : (
                    row.firstname
                  )}
                </td>
                <td className="px-5  border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="text"
                      value={row.surname}
                      onChange={(e) =>
                        updateRow(row.personel_id, {
                          surname: e.target.value,
                        })
                      }
                      className="border rounded border-yellow-500 px-1 "
                    />
                  ) : (
                    row.surname
                  )}
                </td>{" "}
                <td className="px-5  border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="tel"
                      value={row.p_telefon1}
                      onChange={(e) =>
                        updateRow(row.personel_id, {
                          p_telefon1: e.target.value,
                        })
                      }
                      className="border rounded border-yellow-500 px-1 "
                    />
                  ) : (
                    row.p_telefon1
                  )}
                </td>
                <td className="px-5  border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="tel"
                      value={row.p_telefon2}
                      onChange={(e) =>
                        updateRow(row.personel_id, {
                          p_telefon2: e.target.value,
                        })
                      }
                      className="border rounded border-yellow-500 px-1"
                    />
                  ) : (
                    row.p_telefon2
                  )}
                </td>
                <td className="px-5  border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="text"
                      value={row.TC}
                      onChange={(e) =>
                        updateRow(row.personel_id, {
                          TC: e.target.value,
                        })
                      }
                      className="border rounded border-yellow-500 px-1 "
                    />
                  ) : (
                    row.TC
                  )}
                </td>
                <td className="px-5  border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="text"
                      value={row.kan_grubu}
                      onChange={(e) =>
                        updateRow(row.personel_id, {
                          kan_grubu: e.target.value,
                        })
                      }
                      className="border rounded border-yellow-500 px-1 "
                    />
                  ) : (
                    row.kan_grubu
                  )}
                </td>
                <td className="px-5  border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="text"
                      value={row.ikamet_adresi}
                      onChange={(e) =>
                        updateRow(row.personel_id, {
                          ikamet_adresi: e.target.value,
                        })
                      }
                      className="border rounded border-yellow-500 px-1 "
                    />
                  ) : (
                    row.ikamet_adresi
                  )}
                </td>
                <td className="px-5  border-b">
                  {editingRowId === row.personel_id
                    ? !editToggle && (
                        <input
                          type="text"
                          value={row.calisma_durumu}
                          className="border rounded border-yellow-500 px-1 "
                        />
                      )
                    : row.calisma_durumu == 1
                    ? "Çalışıyor"
                    : "Çalışmıyor"}
                  {editingRowId === row.personel_id && (
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button
                          onClick={() => setEditToggle(!editToggle)}
                          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                          Çalışma Durumu Seç
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
                                  onClick={() =>
                                    updateRow(row.personel_id, {
                                      calisma_durumu: 0,
                                    })
                                  }
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Çalışmıyor
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  onClick={() =>
                                    updateRow(row.personel_id, {
                                      calisma_durumu: 1,
                                    })
                                  }
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Çalışıyor
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="text"
                      value={row.proje_saha_adresi}
                      onChange={(e) =>
                        updateRow(row.personel_id, {
                          proje_saha_adresi: e.target.value,
                        })
                      }
                      className="border rounded border-yellow-500 px-2 py-1"
                    />
                  ) : (
                    row.proje_saha_adresi
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="text"
                      value={row.ADAK_adı_soyadı}
                      onChange={(e) =>
                        updateRow(row.personel_id, {
                          ADAK_adı_soyadı: e.target.value,
                        })
                      }
                      className="border rounded border-yellow-500 px-2 py-1"
                    />
                  ) : (
                    row.ADAK_adı_soyadı
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="text"
                      value={row.ADAK_telefon}
                      onChange={(e) =>
                        updateRow(row.personel_id, {
                          ADAK_telefon: e.target.value,
                        })
                      }
                      className="border rounded border-yellow-500 px-2 py-1"
                    />
                  ) : (
                    row.ADAK_telefon
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="text"
                      value={row.ADAK_Bağı}
                      onChange={(e) =>
                        updateRow(row.personel_id, {
                          ADAK_Bağı: e.target.value,
                        })
                      }
                      className="border rounded border-yellow-500 px-2 py-1"
                    />
                  ) : (
                    row.ADAK_Bağı
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.merkez_id
                    ? !editToggle && (
                        <input
                          type="text"
                          value={row.merkez_isim}
                          className="border rounded border-yellow-500 px-2 py-1"
                        />
                      )
                    : row.merkez_isim}
                  {editToggle && (
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                          Merkez Seç
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
                            {unique.map((item, index) => (
                              <div key={index}>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      onClick={() =>
                                        updateRow(row.personel_id, {
                                          merkez_id: item.merkez_id,
                                        })
                                      }
                                      href="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      {item.merkez_isim}
                                    </a>
                                  )}
                                </Menu.Item>
                              </div>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          {/* row data bitiş */}
        </table>
        {/* Yeni satır ekleme formu */}
        {!newPersonelToggle ? (
          <div className="flex justify-center">
            <button
              onClick={() => setNewPersonelToggle(!newPersonelToggle)}
              className="bg-green-600 p-3 border rounded font-sans font-bold hover:bg-green-500"
            >
              Yeni Personel Ekle
            </button>
          </div>
        ) : (
          <div className="mt-4  min-w-max">
            <button
              onClick={() => {
                addRow();
                setNewPersonelToggle(!newPersonelToggle);
              }}
              className="min-w-[8rem] px-3 pb-3 pt-2 text-s border "
            >
              <>
                <BsFillFileArrowUpFill
                  className="text-gray-400  hover:text-slate-200  "
                  size="20"
                ></BsFillFileArrowUpFill>
              </>
            </button>
            <input
              type="text"
              placeholder="Personel ID"
              value={newRowData.firstname}
              onChange={(e) =>
                setNewRowData((prevData) => ({
                  ...prevData,
                  firstname: e.target.value,
                }))
              }
              className="max-w-[8rem]  px-3 py-2 text-s border "
            />
            <input
              type="text"
              placeholder="Ad"
              value={newRowData.firstname}
              onChange={(e) =>
                setNewRowData((prevData) => ({
                  ...prevData,
                  firstname: e.target.value,
                }))
              }
              className="max-w-[8rem]  px-3 py-2 text-s border "
            />
            <input
              type="text"
              placeholder="Soyad"
              value={newRowData.surname}
              onChange={(e) =>
                setNewRowData((prevData) => ({
                  ...prevData,
                  surname: e.target.value,
                }))
              }
              className="max-w-[8rem]  px-3 py-2 text-s border "
            />
            <input
              type="tel"
              placeholder="telefon no 5xxxxxxxxx"
              value={newRowData.p_telefon1}
              onChange={(e) =>
                setNewRowData((prevData) => ({
                  ...prevData,
                  p_telefon1: e.target.value,
                }))
              }
              className="max-w-[8rem] px-3 py-2 text-s border "
            />
            <input
              type="tel"
              placeholder="telefon no 5xxxxxxxxx"
              value={newRowData.p_telefon2}
              onChange={(e) =>
                setNewRowData((prevData) => ({
                  ...prevData,
                  p_telefon2: e.target.value,
                }))
              }
              className="max-w-[8rem] px-3 py-2 text-s border "
            />
            <input
              type="number"
              placeholder="TC kimlik no"
              value={newRowData.TC}
              onChange={(e) =>
                setNewRowData((prevData) => ({
                  ...prevData,
                  TC: e.target.value,
                }))
              }
              className="max-w-[8rem]  px-3 py-2 text-s border "
            />
            <input
              type="text"
              placeholder="Kan Grubu"
              value={newRowData.kan_grubu}
              onChange={(e) =>
                setNewRowData((prevData) => ({
                  ...prevData,
                  kan_grubu: e.target.value,
                }))
              }
              className="max-w-[8rem]  px-3 py-2 text-s border "
            />
            <input
              type="text"
              placeholder="İkamet Adresi"
              value={newRowData.ikamet_adresi}
              onChange={(e) =>
                setNewRowData((prevData) => ({
                  ...prevData,
                  ikamet_adresi: e.target.value,
                }))
              }
              className="max-w-[13rem]  px-3 py-2 text-s border "
            />
            <Menu as="div" className="relative inline-block text-left ">
              <div>
                <Menu.Button className="inline-flex justify-center  gap-x-1.5  bg-white px-3 py-2  text-gray-400 shadow-sm  hover:bg-gray-50 max-w-[9rem]  border">
                  Çalışma Durumu Seç
                  <ChevronDownIcon
                    className="-mr-1 h-10 w-8 text-gray-400"
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
                          onClick={() =>
                            setNewRowData((prevData) => ({
                              ...prevData,
                              calisma_durumu: 0,
                            }))
                          }
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Çalışmıyor
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={() =>
                            setNewRowData((prevData) => ({
                              ...prevData,
                              calisma_durumu: 1,
                            }))
                          }
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Çalışıyor
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <input
              type="text"
              placeholder="Proje Saha Adresi"
              value={newRowData.proje_saha_adresi}
              onChange={(e) =>
                setNewRowData((prevData) => ({
                  ...prevData,
                  proje_saha_adresi: e.target.value,
                }))
              }
              className="max-w-[13rem]  px-3 py-2 text-s border "
            />
            <input
              type="text"
              placeholder="Aranacak Kişi ad soyad"
              value={newRowData.ADAK_adı_soyadı}
              onChange={(e) =>
                setNewRowData((prevData) => ({
                  ...prevData,
                  ADAK_adı_soyadı: e.target.value,
                }))
              }
              className="max-w-[12rem] px-3 py-2 text-s border "
            />
            <input
              type="number"
              placeholder="Aranacak Kişi Telefon no"
              value={newRowData.ADAK_telefon}
              onChange={(e) =>
                setNewRowData((prevData) => ({
                  ...prevData,
                  ADAK_telefon: e.target.value,
                }))
              }
              className="max-w-[12rem]  px-3 py-2 text-s border "
            />
            <input
              type="text"
              placeholder="Aranacak Kişi Bağı"
              value={newRowData.ADAK_Bağı}
              onChange={(e) =>
                setNewRowData((prevData) => ({
                  ...prevData,
                  ADAK_Bağı: e.target.value,
                }))
              }
              className="max-w-[12rem]  px-3 py-2 text-s border "
            />
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center gap-x-1.5  bg-white px-3 py-2  text-gray-400 shadow-sm  hover:bg-gray-50 max-w-[13rem]  border">
                  {newRowData.merkez_id ? "Merkez Seçildi" : "Merkez Seç"}
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
                    {unique.map((item, index) => (
                      <div key={index}>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              onClick={() =>
                                setNewRowData((prevData) => ({
                                  ...prevData,
                                  merkez_id: item.merkez_id,
                                }))
                              }
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {item.merkez_isim}
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        )}
        <div className="font-medium text-lg mt-4">Database Personel Sayısı: <span className="text-red-400">{data.length}</span></div>
        <div>
          <input
            className="border p-1 mt-2 rounded text-lg font-sans font-bold"
            type="text"
            placeholder="Arama yapın..."
            value={filterValue}
            onChange={handleFilter}
          />
        </div>
        <div>
          <table className="min-w-full bg-white border border-gray-300 table-fixed ">
            <thead>
              <tr>
                <th className="min-w-[8rem]  px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium ">
                  İşlemler
                </th>
                <th className=" min-w-[8rem]  px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium ">
                  <div
                    onClick={() => {
                      handleSort("personel_id");
                      setSortToggle(!sortToggle);
                    }}
                    className="flex items-center justify-center "
                  >
                    Personel ID
                    <span className="ml-1 w-1/4 cursor-pointer ">
                      {sortToggle ? (
                        <>
                          <BsFillFileArrowDownFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowDownFill>
                        </>
                      ) : (
                        <>
                          <BsFillFileArrowUpFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowUpFill>
                        </>
                      )}
                    </span>
                  </div>
                </th>
                <th className=" min-w-[8rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                  <div
                    onClick={() => {
                      handleSort("personel_id");
                      setSortToggle(!sortToggle);
                    }}
                    className="flex items-center justify-center"
                  >
                    Ad
                    <span className="ml-1 w-1/4 cursor-pointer ">
                      {sortToggle ? (
                        <>
                          <BsFillFileArrowDownFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowDownFill>
                        </>
                      ) : (
                        <>
                          <BsFillFileArrowUpFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowUpFill>
                        </>
                      )}
                    </span>
                  </div>
                </th>
                <th className=" min-w-[8rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                  <div
                    onClick={() => {
                      handleSort("personel_id");
                      setSortToggle(!sortToggle);
                    }}
                    className="flex items-center justify-center"
                  >
                    Soyad
                    <span className="ml-1 w-1/4 cursor-pointer">
                      {sortToggle ? (
                        <>
                          <BsFillFileArrowDownFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowDownFill>
                        </>
                      ) : (
                        <>
                          <BsFillFileArrowUpFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowUpFill>
                        </>
                      )}
                    </span>
                  </div>
                </th>
                <th className=" min-w-[8rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                  <div
                    onClick={() => {
                      handleSort("personel_id");
                      setSortToggle(!sortToggle);
                    }}
                    className="flex items-center justify-center"
                  >
                    Telefon No
                    <span className="ml-1 w-1/4 cursor-pointer">
                      {sortToggle ? (
                        <>
                          <BsFillFileArrowDownFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowDownFill>
                        </>
                      ) : (
                        <>
                          <BsFillFileArrowUpFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowUpFill>
                        </>
                      )}
                    </span>
                  </div>
                </th>
                <th className=" min-w-[8rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                  <div
                    onClick={() => {
                      handleSort("personel_id");
                      setSortToggle(!sortToggle);
                    }}
                    className="flex items-center justify-center"
                  >
                    Telefon No-2
                    <span className="ml-1 w-1/4 cursor-pointer">
                      {sortToggle ? (
                        <>
                          <BsFillFileArrowDownFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowDownFill>
                        </>
                      ) : (
                        <>
                          <BsFillFileArrowUpFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowUpFill>
                        </>
                      )}
                    </span>
                  </div>
                </th>
                <th className=" min-w-[8rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                  <div
                    onClick={() => {
                      handleSort("personel_id");
                      setSortToggle(!sortToggle);
                    }}
                    className="flex items-center justify-center"
                  >
                    TC Kimlik No
                    <span className="ml-1 w-1/4 cursor-pointer">
                      {sortToggle ? (
                        <>
                          <BsFillFileArrowDownFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowDownFill>
                        </>
                      ) : (
                        <>
                          <BsFillFileArrowUpFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowUpFill>
                        </>
                      )}
                    </span>
                  </div>
                </th>
                <th className=" min-w-[8rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                  <div
                    onClick={() => {
                      handleSort("personel_id");
                      setSortToggle(!sortToggle);
                    }}
                    className="flex items-center justify-center"
                  >
                    Kan Grubu
                    <span className="ml-1 w-1/4 cursor-pointer">
                      {sortToggle ? (
                        <>
                          <BsFillFileArrowDownFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowDownFill>
                        </>
                      ) : (
                        <>
                          <BsFillFileArrowUpFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowUpFill>
                        </>
                      )}
                    </span>
                  </div>
                </th>
                <th className=" min-w-[13rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                  <div
                    onClick={() => {
                      handleSort("personel_id");
                      setSortToggle(!sortToggle);
                    }}
                    className="flex items-center justify-center"
                  >
                    İkamet Adresi
                    <span className="ml-1 w-1/4 cursor-pointer">
                      {sortToggle ? (
                        <>
                          <BsFillFileArrowDownFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowDownFill>
                        </>
                      ) : (
                        <>
                          <BsFillFileArrowUpFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowUpFill>
                        </>
                      )}
                    </span>
                  </div>
                </th>
                <th className=" min-w-[9rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                  <div
                    onClick={() => {
                      handleSort("personel_id");
                      setSortToggle(!sortToggle);
                    }}
                    className="flex items-center justify-center"
                  >
                    Çalışma Durumu
                    <span className="ml-1 w-1/4 cursor-pointer">
                      {sortToggle ? (
                        <>
                          <BsFillFileArrowDownFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowDownFill>
                        </>
                      ) : (
                        <>
                          <BsFillFileArrowUpFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowUpFill>
                        </>
                      )}
                    </span>
                  </div>
                </th>
                <th className=" min-w-[13rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                  <div
                    onClick={() => {
                      handleSort("personel_id");
                      setSortToggle(!sortToggle);
                    }}
                    className="flex items-center justify-center"
                  >
                    Proje Saha Adresi
                    <span className="ml-1 w-1/4 cursor-pointer">
                      {sortToggle ? (
                        <>
                          <BsFillFileArrowDownFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowDownFill>
                        </>
                      ) : (
                        <>
                          <BsFillFileArrowUpFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowUpFill>
                        </>
                      )}
                    </span>
                  </div>
                </th>
                <th className=" min-w-[12rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                  <div
                    onClick={() => {
                      handleSort("personel_id");
                      setSortToggle(!sortToggle);
                    }}
                    className="flex items-center justify-center"
                  >
                    Acil Durumda Aranacak kişi Adı Soyadı
                    <span className="ml-1 w-1/4 cursor-pointer">
                      {sortToggle ? (
                        <>
                          <BsFillFileArrowDownFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowDownFill>
                        </>
                      ) : (
                        <>
                          <BsFillFileArrowUpFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowUpFill>
                        </>
                      )}
                    </span>
                  </div>
                </th>
                <th className=" min-w-[12rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                  <div
                    onClick={() => {
                      handleSort("personel_id");
                      setSortToggle(!sortToggle);
                    }}
                    className="flex items-center justify-center"
                  >
                    Acil Durumda Aranacak kişi telefon no
                    <span className="ml-1 w-1/4 cursor-pointer">
                      {sortToggle ? (
                        <>
                          <BsFillFileArrowDownFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowDownFill>
                        </>
                      ) : (
                        <>
                          <BsFillFileArrowUpFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowUpFill>
                        </>
                      )}
                    </span>
                  </div>
                </th>
                <th className=" min-w-[12rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                  <div
                    onClick={() => {
                      handleSort("personel_id");
                      setSortToggle(!sortToggle);
                    }}
                    className="flex items-center justify-center"
                  >
                    Acil Durumda Aranacak kişi Bağı
                    <span className="ml-1 w-1/4 cursor-pointer">
                      {sortToggle ? (
                        <>
                          <BsFillFileArrowDownFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowDownFill>
                        </>
                      ) : (
                        <>
                          <BsFillFileArrowUpFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowUpFill>
                        </>
                      )}
                    </span>
                  </div>
                </th>
                <th className=" min-w-[13rem] px-3 py-2 text-s border bg-sky-800 bg-opacity-80 font-medium">
                  <div
                    onClick={() => {
                      handleSort("personel_id");
                      setSortToggle(!sortToggle);
                    }}
                    className="flex items-center justify-center"
                  >
                    Merkez
                    <span className="ml-1 w-1/4 cursor-pointer">
                      {sortToggle ? (
                        <>
                          <BsFillFileArrowDownFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowDownFill>
                        </>
                      ) : (
                        <>
                          <BsFillFileArrowUpFill
                            className="text-gray-400  hover:text-slate-200  "
                            size="20"
                          ></BsFillFileArrowUpFill>
                        </>
                      )}
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {paginatedData.map((row, index) => (
                <tr key={index}>
                  {" "}
                  <td className="px-4 py-2 border-b">
                    <div className="flex flex-row ">
                      {editingRowId === row.personel_id ? (
                        <button
                          onClick={() => stopEditing()}
                          className=" hover:bg-slate-300 hover:text-slate-200  text-white font-bold py-1 px-2 rounded "
                        >
                          <BiSave
                            className="text-gray-500  hover:text-gray-700 "
                            size="22"
                          ></BiSave>
                        </button>
                      ) : (
                        <button
                          onClick={() => startEditing(row.personel_id)}
                          className=" hover:bg-slate-300  hover:text-slate-200  text-white font-bold py-1 px-2 rounded "
                        >
                          <BiEdit
                            className="text-gray-500  hover:text-gray-700 "
                            size="22"
                          ></BiEdit>
                        </button>
                      )}
                      <button
                        onClick={() => deleteRow(row.personel_id)}
                        className=" hover:bg-slate-300 hover:text-slate-200  text-white font-bold py-1 px-2 rounded"
                      >
                        <MdDeleteOutline
                          className="text-gray-500  hover:text-gray-700 "
                          size="23"
                        ></MdDeleteOutline>
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-2 border-b">{row.personel_id}</td>
                  <td className="px-4 py-2 border-b">
                    {editingRowId === row.personel_id ? (
                      <input
                        type="text"
                        value={row.firstname}
                        onChange={(e) =>
                          updateRow(row.personel_id, {
                            firstname: e.target.value,
                          })
                        }
                        className="border rounded border-yellow-500 px-2 py-1 "
                      />
                    ) : (
                      row.firstname
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {editingRowId === row.personel_id ? (
                      <input
                        type="text"
                        value={row.surname}
                        onChange={(e) =>
                          updateRow(row.personel_id, {
                            surname: e.target.value,
                          })
                        }
                        className="border rounded border-yellow-500 px-2 py-1"
                      />
                    ) : (
                      row.surname
                    )}
                  </td>{" "}
                  <td className="px-4 py-2 border-b">
                    {editingRowId === row.personel_id ? (
                      <input
                        type="tel"
                        value={row.p_telefon1}
                        onChange={(e) =>
                          updateRow(row.personel_id, {
                            p_telefon1: e.target.value,
                          })
                        }
                        className="border rounded border-yellow-500 px-2 py-1"
                      />
                    ) : (
                      row.p_telefon1
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {editingRowId === row.personel_id ? (
                      <input
                        type="tel"
                        value={row.p_telefon2}
                        onChange={(e) =>
                          updateRow(row.personel_id, {
                            p_telefon2: e.target.value,
                          })
                        }
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      row.p_telefon2
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {editingRowId === row.personel_id ? (
                      <input
                        type="text"
                        value={row.TC}
                        onChange={(e) =>
                          updateRow(row.personel_id, {
                            TC: e.target.value,
                          })
                        }
                        className="border rounded border-yellow-500 px-2 py-1"
                      />
                    ) : (
                      row.TC
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {editingRowId === row.personel_id ? (
                      <input
                        type="text"
                        value={row.kan_grubu}
                        onChange={(e) =>
                          updateRow(row.personel_id, {
                            kan_grubu: e.target.value,
                          })
                        }
                        className="border rounded border-yellow-500 px-2 py-1"
                      />
                    ) : (
                      row.kan_grubu
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {editingRowId === row.personel_id ? (
                      <input
                        type="text"
                        value={row.ikamet_adresi}
                        onChange={(e) =>
                          updateRow(row.personel_id, {
                            ikamet_adresi: e.target.value,
                          })
                        }
                        className="border rounded border-yellow-500 px-2 py-1"
                      />
                    ) : (
                      row.ikamet_adresi
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {editingRowId === row.personel_id
                      ? !editToggle && (
                          <input
                            type="text"
                            value={row.calisma_durumu}
                            className="border rounded border-yellow-500 px-2 py-1"
                          />
                        )
                      : row.calisma_durumu == 1
                      ? "Çalışıyor"
                      : "Çalışmıyor"}
                    {editToggle && (
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            Çalışma Durumu Seç
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
                                    onClick={() =>
                                      updateRow(row.personel_id, {
                                        calisma_durumu: 0,
                                      })
                                    }
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Çalışmıyor
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    onClick={() =>
                                      updateRow(row.personel_id, {
                                        calisma_durumu: 1,
                                      })
                                    }
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Çalışıyor
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {editingRowId === row.personel_id ? (
                      <input
                        type="text"
                        value={row.proje_saha_adresi}
                        onChange={(e) =>
                          updateRow(row.personel_id, {
                            proje_saha_adresi: e.target.value,
                          })
                        }
                        className="border rounded border-yellow-500 px-2 py-1"
                      />
                    ) : (
                      row.proje_saha_adresi
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {editingRowId === row.personel_id ? (
                      <input
                        type="text"
                        value={row.ADAK_adı_soyadı}
                        onChange={(e) =>
                          updateRow(row.personel_id, {
                            ADAK_adı_soyadı: e.target.value,
                          })
                        }
                        className="border rounded border-yellow-500 px-2 py-1"
                      />
                    ) : (
                      row.ADAK_adı_soyadı
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {editingRowId === row.personel_id ? (
                      <input
                        type="text"
                        value={row.ADAK_telefon}
                        onChange={(e) =>
                          updateRow(row.personel_id, {
                            ADAK_telefon: e.target.value,
                          })
                        }
                        className="border rounded border-yellow-500 px-2 py-1"
                      />
                    ) : (
                      row.ADAK_telefon
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {editingRowId === row.personel_id ? (
                      <input
                        type="text"
                        value={row.ADAK_Bağı}
                        onChange={(e) =>
                          updateRow(row.personel_id, {
                            ADAK_Bağı: e.target.value,
                          })
                        }
                        className="border rounded border-yellow-500 px-2 py-1"
                      />
                    ) : (
                      row.ADAK_Bağı
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {editingRowId === row.merkez_id
                      ? !editToggle && (
                          <input
                            type="text"
                            value={row.merkez_isim}
                            className="border rounded border-yellow-500 px-2 py-1"
                          />
                        )
                      : row.merkez_isim}
                    {editToggle && (
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            Merkez Seç
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
                              {unique.map((item, index) => (
                                <div key={index}>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        onClick={() =>
                                          updateRow(row.personel_id, {
                                            merkez_id: item.merkez_id,
                                          })
                                        }
                                        href="#"
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                          "block px-4 py-2 text-sm"
                                        )}
                                      >
                                        {item.merkez_isim}
                                      </a>
                                    )}
                                  </Menu.Item>
                                </div>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            {/* row data bitiş */}
          </table>
        </div>
        {/* pagination sayfa number */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                className={`mx-1 px-4 py-2 rounded ${
                  currentPage === pageNumber
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
                onClick={() => handleClickPage(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default GridTablePersonel;
