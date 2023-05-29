import { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { BsFillFileArrowDownFill, BsFillFileArrowUpFill } from "react-icons/bs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const GridTableMerkez = () => {
  const [editToggle, setEditToggle] = useState(false);
  const [newMerkezToggle, setNewMerkezToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortToggle, setSortToggle] = useState(true);
  const [data, setData] = useState([]);

  const dataAl = async () =>
    await axios
      .get("http://localhost:9000/api/merkez")
      .then((res) => setData(res.data));
  useEffect(() => {
    dataAl();
  }, []);

  const [sehirIsimAl,setSehirIsimAl]=useState([])
  let sehirIsimleri = [];
  useEffect(()=>{
    axios
    .get("http://localhost:9000/api/sehir")
    .then((res) => setSehirIsimAl(res.data));
  },[])

  sehirIsimAl.map(item=>sehirIsimleri.push({
    sehir_id: item.sehir_id,
    sehir_isim: item.sehir_isim,
  })
);

  const uniqueSehir = [];

  const unique = sehirIsimleri.filter((element) => {
    const isDuplicate = uniqueSehir.includes(element.sehir_id);
    if (!isDuplicate) {
      uniqueSehir.push(element.sehir_id);
      return true;
    }
    return false;
  });

  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handleClickPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleScroll = (event) => {
    const { scrollLeft } = event.target;
    setScrollPosition(scrollLeft);
  };

  const [sortConfig, setSortConfig] = useState({
    key: "merkez_id",
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

  // Düzenleme durumunu tutmak için state
  const [editingRowId, setEditingRowId] = useState(null);

  // Yeni satır verilerini tutmak için state
  const [newRowData, setNewRowData] = useState({
    merkez_isim: "",
    m_telefon1: null,
    merkez_adres: "",
    merkez_kordinati_x: null,
    merkez_kordinati_y: null,
    hizmet_baslangıc_tarihi: "",
    sehir_id: null,
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
    await axios.put(`http://localhost:9000/api/merkez/${rowId}`, newData);
    dataAl();
  };

  // Satırı silen fonksiyon
  const deleteRow = async (rowId) => {
    await axios.delete(`http://localhost:9000/api/merkez/${rowId}`);
    dataAl();
  };

  // Yeni satır ekleme fonksiyonu
  const addRow = async () => {
    const newRow = { ...newRowData };
    await axios.post("http://localhost:9000/api/merkez", newRow);
    dataAl();
  };

  return (
    <div
    className="w-[90vw] p-4 overflow-x-auto flex justify-center"
    onScroll={handleScroll}
  >
    <div
      className="relative w-full"
      style={{ transform: `translateX(-${scrollPosition}px)` }}
    >
      {/* Yeni satır ekleme formu */}
      {!newMerkezToggle ? (
        <div className="flex justify-center">
        <button
          onClick={() => setNewMerkezToggle(!newMerkezToggle)}
          className="bg-green-600 p-3 border rounded font-sans font-bold hover:bg-green-500"
        >
          Yeni Merkez Ekle
        </button>
      </div>
    ) : (
      <div className="mt-4 text-center">
        <input
          type="text"
          placeholder="Merkez Adı"
          value={newRowData.merkez_isim}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              merkez_isim: e.target.value,
            }))
          }
          className="border rounded px-2 py-1 mr-2"
        />
        <input
          type="text"
          placeholder="Merkez Telefon"
          value={newRowData.m_telefon1}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              m_telefon1: e.target.value,
            }))
          }
          className="border rounded px-2 py-1 mr-2"
        />
        <input
          type="text"
          placeholder="Merkez Adresi"
          value={newRowData.merkez_adres}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              merkez_adres: e.target.value,
            }))
          }
          className="border rounded px-2 py-1 mr-2"
        />
        <input
          type="text"
          placeholder="X kordinatı"
          value={newRowData.merkez_kordinati_x}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              merkez_kordinati_x: e.target.value,
            }))
          }
          className="border rounded px-2 py-1 mr-2"
        />
        <input
          type="text"
          placeholder="Y kordinatı"
          value={newRowData.merkez_kordinati_y}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              merkez_kordinati_y: e.target.value,
            }))
          }
          className="border rounded px-2 py-1 mr-2"
        />
        <input
          type="text"
          placeholder="Tarih"
          value={newRowData.hizmet_baslangıc_tarihi}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              hizmet_baslangıc_tarihi: e.target.value,
            }))
          }
          className="border rounded px-2 py-1 mr-2"
        />
         <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  {newRowData.sehir_id ? "Şehir Seçildi" : "Şehir Seç"}
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
                                  sehir_id: item.sehir_id,
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
                              {item.sehir_isim}
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
        <button
          onClick={() => {
            addRow();
            setNewMerkezToggle(!newMerkezToggle);
          }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
        >
          Ekle
        </button>
      </div> )}
      <div className="font-medium text-lg mt-4">Database Merkez Sayısı: <span className="text-red-400">{data.length}</span></div>
        <div>
          <input
            className="border p-1 mt-2 rounded text-lg font-sans font-bold"
            type="text"
            placeholder="Arama yapın..."
            value={filterValue}
            onChange={handleFilter}
          />
        </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
          <th className="px-4 py-2 text-xs border-b">İşlemler</th>
          <th className="px-3 py-2 text-s border">
                {" "}
                <div
                  onClick={() => {
                    handleSort("merkez_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center"
                >
                  Merkez ID
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          color="orange"
                          size="4x"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          color="orange"
                          size="4x"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className="px-3 py-2 text-s border">
                {" "}
                <div
                  onClick={() => {
                    handleSort("merkez_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center"
                >
                  Merkez Adı
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          color="orange"
                          size="4x"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          color="orange"
                          size="4x"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className="px-3 py-2 text-s border">
                {" "}
                <div
                  onClick={() => {
                    handleSort("merkez_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center"
                >
                  Merkez Telefonu
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          color="orange"
                          size="4x"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          color="orange"
                          size="4x"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className="px-3 py-2 text-s border">
                {" "}
                <div
                  onClick={() => {
                    handleSort("merkez_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center"
                >
                  Merkez Adresi
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          color="orange"
                          size="4x"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          color="orange"
                          size="4x"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className="px-3 py-2 text-s border">
                {" "}
                <div
                  onClick={() => {
                    handleSort("merkez_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center"
                >
                  Merkez Koordinat X
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          color="orange"
                          size="4x"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          color="orange"
                          size="4x"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className="px-3 py-2 text-s border">
                {" "}
                <div
                  onClick={() => {
                    handleSort("merkez_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center"
                >
                  Merkez Koordinat Y
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          color="orange"
                          size="4x"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          color="orange"
                          size="4x"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className="px-3 py-2 text-s border">
                {" "}
                <div
                  onClick={() => {
                    handleSort("merkez_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center"
                >
                  Hizmet Başlangıç Tarihi
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          color="orange"
                          size="4x"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          color="orange"
                          size="4x"
                        ></BsFillFileArrowUpFill>
                      </>
                    )}
                  </span>
                </div>
              </th>
              <th className="px-3 py-2 text-s border">
                {" "}
                <div
                  onClick={() => {
                    handleSort("merkez_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center"
                >
                  Şehir
                  <span className="ml-1 w-1/4 cursor-pointer">
                    {sortToggle ? (
                      <>
                        <BsFillFileArrowDownFill
                          color="orange"
                          size="4x"
                        ></BsFillFileArrowDownFill>
                      </>
                    ) : (
                      <>
                        <BsFillFileArrowUpFill
                          color="orange"
                          size="4x"
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
              <td className="px-4 py-2 border-b">
              <div className="flex flex-col ">
                {editingRowId === row.merkez_id ? (
                  <button
                    onClick={() => stopEditing()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mb-1"
                  >
                    Kaydet
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(row.merkez_id)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mb-1"
                  >
                    Düzenle
                  </button>
                )}
                <button
                  onClick={() => deleteRow(row.merkez_id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Sil
                </button>
                </div>
              </td>
              <td className="px-4 py-2 border-b">{row.merkez_id}</td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.merkez_id ? (
                  <input
                    type="text"
                    value={row.merkez_isim}
                    onChange={(e) =>
                      updateRow(row.merkez_id, { merkez_isim: e.target.value })
                    }
                    className="border  rounded px-2 py-1"
                  />
                ) : (
                  row.merkez_isim
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.merkez_id ? (
                  <input
                    type="text"
                    value={row.m_telefon1}
                    onChange={(e) =>
                      updateRow(row.merkez_id, { m_telefon1: e.target.value })
                    }
                    className="border  rounded px-2 py-1"
                  />
                ) : (
                  row.m_telefon1
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.merkez_id ? (
                  <input
                    type="text"
                    value={row.merkez_adres}
                    onChange={(e) =>
                      updateRow(row.merkez_id, { merkez_adres: e.target.value })
                    }
                    className="border  rounded px-2 py-1"
                  />
                ) : (
                  row.merkez_adres
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.merkez_id ? (
                  <input
                    type="text"
                    value={row.merkez_kordinati_x}
                    onChange={(e) =>
                      updateRow(row.merkez_id, {
                        merkez_kordinati_x: e.target.value,
                      })
                    }
                    className="border  rounded px-2 py-1"
                  />
                ) : (
                  row.merkez_kordinati_x
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.merkez_id ? (
                  <input
                    type="text"
                    value={row.merkez_kordinati_y}
                    onChange={(e) =>
                      updateRow(row.merkez_id, {
                        merkez_kordinati_y: e.target.value,
                      })
                    }
                    className="border  rounded px-2 py-1"
                  />
                ) : (
                  row.merkez_kordinati_y
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.merkez_id ? (
                  <input
                    type="text"
                    value={row.hizmet_baslangıc_tarihi}
                    onChange={(e) =>
                      updateRow(row.merkez_id, {
                        hizmet_baslangıc_tarihi: e.target.value,
                      })
                    }
                    className="border  rounded px-2 py-1"
                  />
                ) : (
                  row.hizmet_baslangıc_tarihi
                )}
              </td>
             <td className="px-4 py-2 border-b">
                  {editingRowId === row.merkez_id
                    ? !editToggle && (
                        <input
                          type="text"
                          value={row.sehir_isim}
                          className="border rounded border-yellow-500 px-2 py-1"
                        />
                      )
                    : row.sehir_isim}
                  {editToggle && (
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                          Şehir Seç
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
                                        updateRow(row.sehir_id, {
                                          sehir_id: item.sehir_id,
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
                                      {item.sehir_isim}
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
      </table>
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

export default GridTableMerkez;
