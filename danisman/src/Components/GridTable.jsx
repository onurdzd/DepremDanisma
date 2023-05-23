import {useState} from "react"

const GridTable = () => {
  // Örnek veri
  const [data, setData] = useState([
    { id: 1, name: "Öğe 1", description: "Açıklama 1" },
    { id: 2, name: "Öğe 2", description: "Açıklama 2" },
    { id: 3, name: "Öğe 3", description: "Açıklama 3" },
  ]);

  // Düzenleme durumunu tutmak için state
  const [editingRowId, setEditingRowId] = useState(null);

  // Yeni satır verilerini tutmak için state
  const [newRowData, setNewRowData] = useState({
    id: "",
    name: "",
    description: "",
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
    setNewRowData({ id: "", name: "", description: "" });
  };

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">ID</th>
            <th className="px-4 py-2 border-b">Ad</th>
            <th className="px-4 py-2 border-b">Açıklama</th>
            <th className="px-4 py-2 border-b">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="px-4 py-2 border-b">{row.id}</td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.id ? (
                  <input
                    type="text"
                    value={row.name}
                    onChange={(e) =>
                      updateRow(row.id, { name: e.target.value })
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.name
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.id ? (
                  <input
                    type="text"
                    value={row.description}
                    onChange={(e) =>
                      updateRow(row.id, { description: e.target.value })
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.description
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
          value={newRowData.name}
          onChange={(e) =>
            setNewRowData((prevData) => ({ ...prevData, name: e.target.value }))
          }
          className="border rounded px-2 py-1 mr-2"
        />
        <input
          type="text"
          placeholder="Açıklama"
          value={newRowData.description}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              description: e.target.value,
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
