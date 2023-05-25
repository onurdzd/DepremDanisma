import { useState, useEffect } from "react";
import axios from "axios";

const GridTableKurum = () => {
  const [data, setData] = useState([
    {
      kurum_id: 1,
      kurum_adi: "İzmit Belediyesi",
      kurum_adi_kisaltma: "İB",
      merkez_id: 1,
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
    kurum_adi: "",
    kurum_adi_kisaltma: "",
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
    /*  await axios.put(`http://localhost:9000/api/merkez/${rowId}`, newData); */
    setData((prevData) =>
      prevData.map((row) => {
        if (row.kurum_id === rowId) {
          return { ...row, ...newData };
        }
        return row;
      })
    );
  };

  // Satırı silen fonksiyon
  const deleteRow = async (rowId) => {
    /*  await axios.delete(`http://localhost:9000/api/merkez/${rowId}`); */
    setData((prevData) => prevData.filter((row) => row.kurum_id !== rowId));
  };

  // Yeni satır ekleme fonksiyonu
  const addRow = async () => {
    const newRow = { ...newRowData, kurum_id: data.length + 1 };
    setData((prevData) => [...prevData, newRow]);
    /*     await axios.post("http://localhost:9000/api/merkez", newRow);
    dataAl(); */
  };

  return (
    <div className=" w-[80vw]   p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 text-xs border-b">Kurum ID</th>
            <th className="px-4 py-2 text-xs border-b">Kurum Adı</th>
            <th className="px-4 py-2 text-xs border-b">Kurum Adı kısaltma</th>
            <th className="px-4 py-2 text-xs border-b">Bağlı olduğu Merkez</th>
            <th className="px-4 py-2 text-xs border-b">İşlemler</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-b">{row.kurum_id}</td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.kurum_id ? (
                  <input
                    type="text"
                    value={row.kurum_adi}
                    onChange={(e) =>
                      updateRow(row.kurum_id, { tür: e.target.value })
                    }
                    className="border  rounded px-2 py-1"
                  />
                ) : (
                  row.kurum_adi
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.kurum_id ? (
                  <input
                    type="text"
                    value={row.kurum_adi_kisaltma}
                    onChange={(e) =>
                      updateRow(row.kurum_id, {
                        kurum_adi_kisaltma: e.target.value,
                      })
                    }
                    className="border  rounded px-2 py-1"
                  />
                ) : (
                  row.kurum_adi_kisaltma
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.kurum_id ? (
                  <input
                    type="text"
                    value={row.merkez_id}
                    onChange={(e) =>
                      updateRow(row.kurum_id, { merkez_id: e.target.value })
                    }
                    className="border  rounded px-2 py-1"
                  />
                ) : (
                  row.merkez_id
                )}
              </td>

              <td className="px-4 py-2 border-b">
                {editingRowId === row.kurum_id ? (
                  <button
                    onClick={() => stopEditing()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    Kaydet
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(row.kurum_id)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    Düzenle
                  </button>
                )}
                <button
                  onClick={() => deleteRow(row.kurum_id)}
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
          placeholder="Kurum Adı"
          value={newRowData.kurum_adi}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              kurum_adi: e.target.value,
            }))
          }
          className="border rounded px-2 py-1 mr-2"
        />
        <input
          type="text"
          placeholder="Kurum Adı Kısaltma"
          value={newRowData.kurum_adi_kisaltma}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              kurum_adi_kisaltma: e.target.value,
            }))
          }
          className="border rounded px-2 py-1 mr-2"
        />

        <input
          type="text"
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

export default GridTableKurum;
