import { useState, useEffect } from "react";
import axios from "axios";

const GridTableMerkez = () => {
  const [data, setData] = useState([
    {
      merkez_id: 1,
      merkez_isim: "İbb afet kordinasyon merkezi",
      m_telefon1: 25332890061,
      merkez_adres: "İskenderun",
      merkez_kordinati_x: 36.540673,
      merkez_kordinati_y: 36.540673,
      hizmet_baslangıc_tarihi: "08-03-2023",
      sehir_id: 7,
    },
  ]);

  /*  const dataAl = async () =>
    await axios
      .get("http://localhost:9000/api/merkez")
      .then((res) => setData(res.data));
  useEffect(() => {
    dataAl();
  }, []); */

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
  };

  // Satır düzenlemesini bitiren fonksiyon
  const stopEditing = () => {
    setEditingRowId(null);
  };

  // Satırı güncelleyen fonksiyon
  const updateRow = async (rowId, newData) => {
    /*  await axios.put(`http://localhost:9000/api/merkez/${rowId}`, newData); */
    setData((prevData) =>
      prevData.map((row) => {
        if (row.merkez_id === rowId) {
          return { ...row, ...newData };
        }
        return row;
      })
    );
  };

  // Satırı silen fonksiyon
  const deleteRow = async (rowId) => {
    /*  await axios.delete(`http://localhost:9000/api/merkez/${rowId}`); */
    setData((prevData) => prevData.filter((row) => row.merkez_id !== rowId));
  };

  // Yeni satır ekleme fonksiyonu
  const addRow = async () => {
    const newRow = { ...newRowData, merkez_id: data.length + 1 };
    setData((prevData) => [...prevData, newRow]);
    /*     await axios.post("http://localhost:9000/api/merkez", newRow);
    dataAl(); */
  };

  return (
    <div className=" w-[80vw]   p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 text-xs border-b">Merkez ID</th>
            <th className="px-4 py-2 text-xs border-b">Merkez Adı</th>
            <th className="px-4 py-2 text-xs border-b">Merkez Adresi</th>
            <th className="px-4 py-2 text-xs border-b">Merkez Kordinat X</th>
            <th className="px-4 py-2 text-xs border-b">Merkez Kordinat Y</th>
            <th className="px-4 py-2 text-xs border-b">
              Hizmet Başlangıç Tarihi
            </th>
            <th className="px-4 py-2 text-xs border-b">Şehir</th>
            <th className="px-4 py-2 text-xs border-b">İşlemler</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((row, index) => (
            <tr key={index}>
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
                {editingRowId === row.merkez_id ? (
                  <input
                    type="text"
                    value={row.sehir_id}
                    onChange={(e) =>
                      updateRow(row.merkez_id, {
                        sehir_id: e.target.value,
                      })
                    }
                    className="border  rounded px-2 py-1"
                  />
                ) : (
                  row.sehir_id
                )}
              </td>

              <td className="px-4 py-2 border-b">
                {editingRowId === row.merkez_id ? (
                  <button
                    onClick={() => stopEditing()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    Kaydet
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(row.merkez_id)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Yeni satır ekleme formu */}
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
        <input
          type="text"
          placeholder="Şehir"
          value={newRowData.sehir_id}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              sehir_id: e.target.value,
            }))
          }
          className="border rounded px-2 py-1 mr-2"
        />

        <button
          onClick={addRow}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
        >
          Ekle
        </button>
      </div>
    </div>
  );
};

export default GridTableMerkez;
