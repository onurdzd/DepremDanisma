import { useState ,useEffect} from "react";
import axios from "axios"

const GridTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Mert",
      surname: "Gök",
      city: "Hatay",
      center: "Defne",
      phone: 1234567890,
    },
  ]);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/personel").then(res=>setData(res.data))
  },[])

  console.log(data)
  
  // Düzenleme durumunu tutmak için state
  const [editingRowId, setEditingRowId] = useState(null);

  // Yeni satır verilerini tutmak için state
  const [newRowData, setNewRowData] = useState({
    id: "",
    name: "",
    surname: "",
    city: "",
    center: "",
    telefon: 0,
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
  const updateRow = (rowId, newData) => {
    setData((prevData) =>
      prevData.map((row) => {
        if (row.id === rowId) {
          return { ...row, ...newData };
        }
        return row;
      })
    );
  };

  // Satırı silen fonksiyon
  const deleteRow = (rowId) => {
    setData((prevData) => prevData.filter((row) => row.id !== rowId));
  };

  // Yeni satır ekleme fonksiyonu
  const addRow = () => {
    const newRow = { ...newRowData, id: data.length + 1 };
    setData((prevData) => [...prevData, newRow]);
    setNewRowData({
      id: "",
      name: "",
      surname: "",
      city: "",
      center: "",
      phone: 0,
    });
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
          {data.map((row) => (
            <tr key={row.personel_id}>
              <td className="px-4 py-2 border-b">{row.personel_id}</td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.id ? (
                  <input
                    type="text"
                    value={row.firstname}
                    onChange={(e) =>
                      updateRow(row.id, { firstname: e.target.value })
                    }
                    className="border  rounded px-2 py-1"
                  />
                ) : (
                  row.firstname
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.id ? (
                  <input
                    type="text"
                    value={row.surname}
                    onChange={(e) =>
                      updateRow(row.id, { surname: e.target.value })
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.surname
                )}
              </td>{" "}
              <td className="px-4 py-2 border-b">
                {editingRowId === row.id ? (
                  <input
                    type="text"
                    value={row.sehir_isim}
                    onChange={(e) =>
                      updateRow(row.id, { sehir_isim: e.target.value })
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.sehir_isim
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.id ? (
                  <input
                    type="text"
                    value={row.merkez_isim}
                    onChange={(e) =>
                      updateRow(row.id, { merkez_isim: e.target.value })
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.merkez_isim
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.id ? (
                  <input
                    type="text"
                    value={row.tel}
                    onChange={(e) =>
                      updateRow(row.id, { tel: e.target.value })
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.tel
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.id ? (
                  <button
                    onClick={() => stopEditing()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    Kaydet
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(row.id)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    Düzenle
                  </button>
                )}
                <button
                  onClick={() => deleteRow(row.id)}
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
      <div className="mt-4">
        <input
          type="text"
          placeholder="ID"
          value={newRowData.id}
          onChange={(e) =>
            setNewRowData((prevData) => ({ ...prevData, id: e.target.value }))
          }
          className="border rounded px-2 py-1 mr-2"
        />
        <input
          type="text"
          placeholder="Ad"
          value={newRowData.firstname}
          onChange={(e) =>
            setNewRowData((prevData) => ({ ...prevData, firstname: e.target.value }))
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
          placeholder="Şehir"
          value={newRowData.sehir_isim}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              sehir_isim: e.target.value,
            }))
          }
          className="border rounded px-2 py-1 mr-2"
        />
        <input
          type="text"
          placeholder="Merkez"
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
          placeholder="Telefon"
          value={newRowData.tel}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              tel: e.target.value,
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
