import { useState, useEffect } from "react";
import axios from "axios";

const GridTablePersonel = () => {
  const [data, setData] = useState([
    {
      id: 1,
      firsname: "Mert",
      surname: "Gök",
      telefon1: 5333333332,
      TC: 33333333333,
      kan_grubu: "A+",
      ikamet_adresi: "zart mahallesi zort sokak zırt ap no:23 d:4",
      calisma_durumu: true,
      proje_saha_adresi: "zort mahallesi zart sokak konteyner no:2",
      ADAK_adı_soyadı: "Mahmut Tuncer",
      ADAK_telefon: 5444444444,
      ADAK_Bağı: "Anne",
      merkez_id: 1,
    },
  ]);

  const dataAl = async () =>
    await axios
      .get("http://localhost:9000/api/personel")
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
    telefon1: "",
    telefon2: "",
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
  };

  // Satır düzenlemesini bitiren fonksiyon
  const stopEditing = () => {
    setEditingRowId(null);
  };

  // Satırı güncelleyen fonksiyon
  const updateRow = async (rowId, newData) => {
    await axios.put(`http://localhost:9000/api/personel/${rowId}`, newData);
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
    await axios.delete(`http://localhost:9000/api/personel/${rowId}`);
  };

  // Yeni satır ekleme fonksiyonu
  const addRow = async () => {
    const newRow = { ...newRowData };
    await axios.post("http://localhost:9000/api/personel", newRow);
    dataAl();
  };

  return (
    <div className=" w-[80vw]   p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 text-xs border-b">Personel ID</th>
            <th className="px-4 py-2 text-xs border-b">Ad</th>
            <th className="px-4 py-2 text-xs border-b">Soyad</th>
            <th className="px-4 py-2 text-xs border-b">Telefon Numarası</th>
            <th className="px-4 py-2 text-xs border-b">Telefon Numarası</th>
            <th className="px-4 py-2 text-xs border-b">TC kimlik no</th>
            <th className="px-4 py-2 text-xs border-b">Kan Grubu</th>
            <th className="px-4 py-2 text-xs border-b">İkamet Adresi</th>
            <th className="px-4 py-2 text-xs border-b">Çalışma Durumu</th>
            <th className="px-4 py-2 text-xs border-b">Proje Saha Adresi</th>
            <th className="px-4 py-2 text-xs border-b">
              Acil Durumda Aranacak kişi Adı Soyadı
            </th>
            <th className="px-4 py-2 text-xs border-b">
              Acil Durumda Aranacak kişi telefon no
            </th>
            <th className="px-4 py-2 text-xs border-b">
              Acil Durumda Aranacak kişi Bağı
            </th>
            <th className="px-4 py-2 text-xs border-b">Merkez</th>
            <th className="px-4 py-2 text-xs border-b">İşlemler</th>
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
                    type="tel"
                    value={row.telefon1}
                    onChange={(e) =>
                      updateRow(row.personel_id, { telefon1: e.target.value })
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.telefon1
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.personel_id ? (
                  <input
                    type="tel"
                    value={row.telefon2}
                    onChange={(e) =>
                      updateRow(row.personel_id, { telefon2: e.target.value })
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.telefon2
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.TC ? (
                  <input
                    type="text"
                    value={row.TC}
                    onChange={(e) =>
                      updateRow(row.TC, {
                        TC: e.target.value,
                      })
                    }
                    className="border rounded px-2 py-1"
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
                      updateRow(row.kan_grubu, { kan_grubu: e.target.value })
                    }
                    className="border rounded px-2 py-1"
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
                      updateRow(row.ikamet_adresi, {
                        ikamet_adresi: e.target.value,
                      })
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.ikamet_adresi
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.personel_id ? (
                  <input
                    type="text"
                    value={row.calisma_durumu}
                    onChange={(e) =>
                      updateRow(row.calisma_durumu, {
                        calisma_durumu: e.target.value,
                      })
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.calisma_durumu
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.personel_id ? (
                  <input
                    type="text"
                    value={row.proje_saha_adresi}
                    onChange={(e) =>
                      updateRow(row.proje_saha_adresi, {
                        proje_saha_adresi: e.target.value,
                      })
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.proje_saha_adresi
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.ADAK_adı_soyadı ? (
                  <input
                    type="text"
                    value={row.ADAK_adı_soyadı}
                    onChange={(e) =>
                      updateRow(row.ADAK_adı_soyadı, {
                        ADAK_adı_soyadı: e.target.value,
                      })
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.ADAK_adı_soyadı
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.ADAK_telefon ? (
                  <input
                    type="text"
                    value={row.ADAK_telefon}
                    onChange={(e) =>
                      updateRow(row.ADAK_telefon, {
                        ADAK_telefon: e.target.value,
                      })
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.ADAK_telefon
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.ADAK_Bağı ? (
                  <input
                    type="text"
                    value={row.ADAK_Bağı}
                    onChange={(e) =>
                      updateRow(row.ADAK_Bağı, {
                        ADAK_Bağı: e.target.value,
                      })
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.ADAK_Bağı
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.merkez_id ? (
                  <input
                    type="text"
                    value={row.merkez_id}
                    onChange={(e) =>
                      updateRow(row.merkez_id, {
                        merkez_id: e.target.value,
                      })
                    }
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.merkez_id
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
          type="tel"
          placeholder="telefon no 5xxxxxxxxx"
          value={newRowData.telefon1}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              telefon1: e.target.value,
            }))
          }
          className="border rounded px-2 py-1 mr-2"
        />
        <input
          type="tel"
          placeholder="telefon no 5xxxxxxxxx"
          value={newRowData.telefon2}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              telefon2: e.target.value,
            }))
          }
          className="border rounded px-2 py-1 mr-2"
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
          className="border rounded px-2 py-1 mr-2"
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
          className="border rounded px-2 py-1 mr-2"
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
          className="border rounded px-2 py-1 mr-2"
        />
        <input
          type="text"
          placeholder="Çalışma Durumu"
          value={newRowData.calisma_durumu}
          onChange={(e) =>
            setNewRowData((prevData) => ({
              ...prevData,
              calisma_durumu: e.target.value,
            }))
          }
          className="border rounded px-2 py-1 mr-2"
        />
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
          className="border rounded px-2 py-1 mr-2"
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
          className="border rounded px-2 py-1 mr-2"
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
          className="border rounded px-2 py-1 mr-2"
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

export default GridTablePersonel;
