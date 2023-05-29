import { useState, useEffect } from "react";
import axios from "axios";

const GridTableHizmet = () => {
  const [data, setData] = useState([
    {
      hizmet_id: 1,
      hizmet_created_at: null,
      donem: "05-2023",
      hizmet_tipi: "Psikolojik Destek",
      erisilen_kisi_sayisi: 20,
      merkez_id: 1,
    },
  ]);

  const dataAl = async () =>
    await axios
      .get("http://localhost:9000/api/hizmet")
      .then((res) => setData(res.data));
  useEffect(() => {
    dataAl();
  }, []);

  // Düzenleme durumunu tutmak için state
  const [editingRowId, setEditingRowId] = useState(null);

  // Yeni satır verilerini tutmak için state
  const [newRowData, setNewRowData] = useState({
    donem: "",
    hizmet_tipi: "",
    erisilen_kisi_sayisi: null,
    merkez_id: null,
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
    await axios.put(`http://localhost:9000/api/hizmet/${rowId}`, newData);
    dataAl();
  };

  // Satırı silen fonksiyon
  const deleteRow = async (rowId) => {
    await axios.delete(`http://localhost:9000/api/hizmet/${rowId}`);
    dataAl();
  };

  // Yeni satır ekleme fonksiyonu
  const addRow = async () => {
    const newRow = { ...newRowData };
    await axios.post("http://localhost:9000/api/hizmet", newRow);
    dataAl();
  };

  return (
    <div className=" w-[80vw]   p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 text-xs border-b">Hizmet ID</th>
            <th className="px-4 py-2 text-xs border-b">Veri Giriş Tarihi</th>
            <th className="px-4 py-2 text-xs border-b">Hizmet Tarihi</th>
            <th className="px-4 py-2 text-xs border-b">Hizmet Tipi</th>
            <th className="px-4 py-2 text-xs border-b">Erişilen Kişi Sayısı</th>
            <th className="px-4 py-2 text-xs border-b">Bağlı olduğu Merkez</th>
            <th className="px-4 py-2 text-xs border-b">İşlemler</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-b">{row.hizmet_id}</td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.hizmet_id ? (
                  <input
                    type="text"
                    value={row.tür}
                    onChange={(e) =>
                      updateRow(row.hizmet_id, {
                        hizmet_created_at: e.target.value,
                      })
                    }
                    className="border  rounded px-2 py-1"
                  />
                ) : (
                  row.hizmet_created_at
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.hizmet_id ? (
                  <input
                    type="text"
                    value={row.donem}
                    onChange={(e) =>
                      updateRow(row.hizmet_id, {
                        donem: e.target.value,
                      })
                    }
                    className="border  rounded px-2 py-1"
                  />
                ) : (
                  row.donem
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.hizmet_id ? (
                  <input
                    type="text"
                    value={row.hizmet_tipi}
                    onChange={(e) =>
                      updateRow(row.hizmet_id, { hizmet_tipi: e.target.value })
                    }
                    className="border  rounded px-2 py-1"
                  />
                ) : (
                  row.hizmet_tipi
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.hizmet_id ? (
                  <input
                    type="text"
                    value={row.erisilen_kisi_sayisi}
                    onChange={(e) =>
                      updateRow(row.hizmet_id, {
                        erisilen_kisi_sayisi: e.target.value,
                      })
                    }
                    className="border  rounded px-2 py-1"
                  />
                ) : (
                  row.erisilen_kisi_sayisi
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.hizmet_id ? (
                  <input
                    type="text"
                    value={row.merkez_id}
                    onChange={(e) =>
                      updateRow(row.hizmet_id, {
                        merkez_id: e.target.value,
                      })
                    }
                    className="border  rounded px-2 py-1"
                  />
                ) : (
                  row.merkez_id
                )}
              </td>

              <td className="px-4 py-2 border-b">
                {editingRowId === row.hizmet_id ? (
                  <button
                    onClick={() => stopEditing()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    Kaydet
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(row.hizmet_id)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    Düzenle
                  </button>
                )}
                <button
                  onClick={() => deleteRow(row.hizmet_id)}
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
          placeholder="Hizmet Tarihi"
          value={newRowData.donem}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              donem: e.target.value,
            }))
          }
          className="border rounded px-2 py-1 mr-2"
        />
        <input
          type="text"
          placeholder="Hizmet Tipi"
          value={newRowData.hizmet_tipi}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              hizmet_tipi: e.target.value,
            }))
          }
          className="border rounded px-2 py-1 mr-2"
        />

        <input
          type="number"
          placeholder="Kişi Sayısı"
          value={newRowData.erisilen_kisi_sayisi}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              erisilen_kisi_sayisi: e.target.value,
            }))
          }
          className="border rounded px-2 py-1 mr-2"
        />
        <input
          type="number"
          placeholder="Merkez"
          value={newRowData.merkez_id}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              merkez_id: e.target.value,
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

export default GridTableHizmet;
