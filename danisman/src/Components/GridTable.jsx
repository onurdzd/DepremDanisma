import { useState, useEffect } from "react";
import axios from "axios";

const GridTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Mert",
      surname: "Gök",
      sehir_isim: "Hatay",
      merkez_isim: "Defne",
      phone: 1234567890,
    },
  ]);

  const dataAl = async () =>
    await axios
      .get("http://localhost:5000/api/personel")
      .then((res) => setData(res.data));
  useEffect(() => {
    dataAl();
  }, [data]);

  // Düzenleme durumunu tutmak için state
  const [editingRowId, setEditingRowId] = useState(null);

  // Yeni satır verilerini tutmak için state
  const [newRowData, setNewRowData] = useState({
    firstname: "",
    surname: "",
    merkez_id: "",
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
  const updateRow = async(rowId, newData) => {
    await axios.put(`http://localhost:5000/api/personel/${rowId}`,newData);
    setData((prevData) =>
      prevData.map((row) => {
        if (row.personel_id === rowId) {
          return { ...row, ...newData };
        }
        return row;
      })
    );
  };

  // Satırı silen fonksiyon
  const deleteRow = async (rowId) => {
    await axios.delete(`http://localhost:5000/api/personel/${rowId}`);
  };

  // Yeni satır ekleme fonksiyonu
  const addRow = async () => {
    const newRow = { ...newRowData };
    await axios.post("http://localhost:5000/api/personel", newRow);
    dataAl();
  };

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Personel ID</th>
            <th className="px-4 py-2 border-b">Ad</th>
            <th className="px-4 py-2 border-b">Soyad</th>
            <th className="px-4 py-2 border-b">Şehir</th>
            <th className="px-4 py-2 border-b">Merkez</th>
            <th className="px-4 py-2 border-b">Telefon</th>
            <th className="px-4 py-2 border-b">İşlemler</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-b">{row.personel_id}</td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.personel_id ? (
                  <input
                    type="text"
                    value={row.firstname}
                    onChange={(e) =>
                      updateRow(row.personel_id, { firstname: e.target.value })
                    }
                    className="border  rounded px-2 py-1"
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
                      updateRow(row.personel_id, { surname: e.target.value })
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.surname
                )}
              </td>{" "}
              <td className="px-4 py-2 border-b">
                {editingRowId === row.personel_id ? (
                  <input
                    type="text"
                    value={row.sehir_isim}
                    onChange={(e) =>
                      updateRow(row.personel_id, { sehir_isim: e.target.value })
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.sehir_isim
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.personel_id ? (
                  <input
                    type="text"
                    value={row.merkez_isim}
                    onChange={(e) =>
                      updateRow(row.personel_id, { merkez_isim: e.target.value })
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.merkez_isim
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.personel_id ? (
                  <input
                    type="text"
                    value={row.tel}
                    onChange={(e) => updateRow(row.personel_id, { tel: e.target.value })}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.tel
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.personel_id ? (
                  <button
                    onClick={() => stopEditing()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    Kaydet
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(row.personel_id)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    Düzenle
                  </button>
                )}
                <button
                  onClick={() => deleteRow(row.personel_id)}
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
          placeholder="Ad"
          value={newRowData.firstname}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              firstname: e.target.value,
            }))
          }
          className="border rounded px-2 py-1 mr-2"
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
          className="border rounded px-2 py-1 mr-2"
        />
        <input
          type="text"
          placeholder="Merkez id"
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

export default GridTable;
