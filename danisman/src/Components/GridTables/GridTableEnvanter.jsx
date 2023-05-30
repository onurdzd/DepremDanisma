import { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { BsFillFileArrowDownFill, BsFillFileArrowUpFill } from "react-icons/bs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const GridTableEnvanter = () => {
  /////////
  const [editToggle, setEditToggle] = useState(false);
  const [newEnvanterToggle, setNewEnvanterToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortToggle, setSortToggle] = useState(true);

  const [data, setData] = useState([]);

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

  //sıralama&filtreleme
  const [sortConfig, setSortConfig] = useState({
    key: "envanter_id",
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
  //////////////

  const dataAl = async () =>
    await axios
      .get("http://localhost:9000/api/envanter")
      .then((res) => setData(res.data));
  useEffect(() => {
    dataAl();
  }, []);

  // Düzenleme durumunu tutmak için state
  const [editingRowId, setEditingRowId] = useState(null);

  // Yeni satır verilerini tutmak için state
  const [newRowData, setNewRowData] = useState({
    envanter_adi: "",
    tür: "",
    envanter_aciklama: "",
    envanter_adet: null,
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
    await axios.put(`http://localhost:9000/api/envanter/${rowId}`, newData);
    dataAl();
  };

  // Satırı silen fonksiyon
  const deleteRow = async (rowId) => {
    await axios.delete(`http://localhost:9000/api/envanter/${rowId}`);
    dataAl();
  };

  // Yeni satır ekleme fonksiyonu
  const addRow = async () => {
    const newRow = { ...newRowData };
    await axios.post("http://localhost:9000/api/envanter", newRow);
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
        {!newEnvanterToggle ? (
          <div className="flex justify-center">
            <button
              onClick={() => setNewEnvanterToggle(!newEnvanterToggle)}
              className="bg-green-600 p-3 border rounded font-sans font-bold hover:bg-green-500"
            >
              Yeni Envanter Ekle
            </button>
          </div>
        ) : (
          <div className="mt-4 text-center">
            <input
              type="text"
              placeholder="Envanter Adı"
              value={newRowData.envanter_adi}
              onChange={(e) =>
                setNewRowData((prevData) => ({
                  ...prevData,
                  envanter_adi: e.target.value,
                }))
              }
              className="border rounded px-2 py-1 mr-2"
            />
            <input
              type="text"
              placeholder="Envanter türü"
              value={newRowData.tür}
              onChange={(e) =>
                setNewRowData((prevData) => ({
                  ...prevData,
                  tür: e.target.value,
                }))
              }
              className="border rounded px-2 py-1 mr-2"
            />
            <input
              type="text"
              placeholder="Envanter Açıklama"
              value={newRowData.envanter_aciklama}
              onChange={(e) =>
                setNewRowData((prevData) => ({
                  ...prevData,
                  envanter_aciklama: e.target.value,
                }))
              }
              className="border rounded px-2 py-1 mr-2"
            />
            <input
              type="number"
              placeholder="Adet"
              value={newRowData.envanter_adet}
              onChange={(e) =>
                setNewRowData((prevData) => ({
                  ...prevData,
                  envanter_adet: e.target.value,
                }))
              }
              className="border rounded px-2 py-1 mr-2"
            />
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
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
            <button
              onClick={() => {
                addRow();
                setNewEnvanterToggle(!newEnvanterToggle);
              }}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
            >
              Ekle
            </button>
          </div>
        )}
        <div className="font-medium text-lg mt-4">Database Envanter Sayısı: <span className="text-red-400">{data.length}</span></div>
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
              <th className="px-3 py-2 text-s border">İşlemler</th>
              <th className="px-3 py-2 text-s border">
                {" "}
                <div
                  onClick={() => {
                    handleSort("envanter_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center"
                >
                  Envanter ID
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
                    handleSort("envanter_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center"
                >
                  Envanter Adı
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
                    handleSort("envanter_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center"
                >
                  Envanter Türü
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
                    handleSort("envanter_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center"
                >
                  Envanter Açıklama
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
                    handleSort("envanter_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center"
                >
                  Envanter Miktarı
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
                    handleSort("envanter_id");
                    setSortToggle(!sortToggle);
                  }}
                  className="flex items-center"
                >
                  Bağlı Olduğu Merkez
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
                    {editingRowId === row.envanter_id ? (
                      <button
                        onClick={() => stopEditing()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mb-1"
                      >
                        Kaydet
                      </button>
                    ) : (
                      <button
                        onClick={() => startEditing(row.envanter_id)}
                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mb-1"
                      >
                        Düzenle
                      </button>
                    )}
                    <button
                      onClick={() => deleteRow(row.envanter_id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    >
                      Sil
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2 border-b">{row.envanter_id}</td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.envanter_id ? (
                    <input
                      type="text"
                      value={row.envanter_adi}
                      onChange={(e) =>
                        updateRow(row.envanter_id, {
                          envanter_adi: e.target.value,
                        })
                      }
                      className="border  rounded px-2 py-1"
                    />
                  ) : (
                    row.envanter_adi
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.envanter_id ? (
                    <input
                      type="text"
                      value={row.tür}
                      onChange={(e) =>
                        updateRow(row.envanter_id, {
                          tür: e.target.value,
                        })
                      }
                      className="border  rounded px-2 py-1"
                    />
                  ) : (
                    row.tür
                  )}
                </td>
                <td className="px-4 py-2 max-w-[5rem] border-b">
                  {editingRowId === row.envanter_id ? (
                    <input
                      type="text"
                      value={row.envanter_aciklama}
                      onChange={(e) =>
                        updateRow(row.envanter_id, {
                          envanter_aciklama: e.target.value,
                        })
                      }
                      className="border  rounded px-2 py-1"
                    />
                  ) : (
                    row.envanter_aciklama
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.envanter_id ? (
                    <input
                      type="text"
                      value={row.envanter_adet}
                      onChange={(e) =>
                        updateRow(row.envanter_id, {
                          envanter_adet: e.target.value,
                        })
                      }
                      className="border  rounded px-2 py-1"
                    />
                  ) : (
                    row.envanter_adet
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
                                        updateRow(row.envanter_id, {
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

export default GridTableEnvanter;
