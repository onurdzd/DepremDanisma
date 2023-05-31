import { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "@material-table/core";

const GridTableHizmet = () => {
  const [data, setData] = useState([]);

  const dataAl = async () =>
    await axios
      .get("http://localhost:9000/api/hizmet")
      .then((res) => setData(res.data));
  useEffect(() => {
    dataAl();
  }, []);

  const [merkezIsimAl, setMerkezIsimAl] = useState([]);
  let merkezIsimleri = [];
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/merkez")
      .then((res) => setMerkezIsimAl(res.data));
  }, []);

  merkezIsimAl.map((item) =>
    merkezIsimleri.push({
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

  return (
    <>
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          options={{
            filtering: true,
            search: true,
            selection: true,
            sorting: true,
          }}
          actions={[
            {
              icon: "save",
              tooltip: "Save User",
              onClick: (event, rowData) => {
                // Kaydet bölümü
              },
            },
          ]}
          columns={[
            {
              title: "Veri Giriş Tarihi",
              field: "hizmet_created_at",
            },
            {
              title: "Hizmet Tarihi",
              field: "donem",
              validate: (rowData) =>
                rowData.donem === undefined || rowData.donem === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Hizmet Tipi",
              field: "hizmet_tipi",
              validate: (rowData) =>
                rowData.hizmet_tipi === undefined || rowData.hizmet_tipi === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Erişilen Kişi Sayısı",
              field: "erisilen_kisi_sayisi",
              validate: (rowData) =>
                rowData.erisilen_kisi_sayisi === undefined ||
                rowData.erisilen_kisi_sayisi === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Bağlı Olduğu Merkez",
              field: "merkez_id",
              render: (rowData) =>
                unique.find((item) => item.merkez_id == rowData.merkez_id)
                  ?.merkez_isim,
              validate: (rowData) =>
                rowData.merkez_id === undefined || rowData.merkez_id === ""
                  ? "Zorunlu"
                  : true,
              lookup: unique.map(item=>item.merkez_isim)      
            },
          ]}
          data={data}
          title="Hizmet Tablosu"
          editable={{
            onRowAdd: async (newData) => {
              await axios.post("http://localhost:9000/api/hizmet", newData);
              dataAl();
            },
            onRowUpdate: async (newData, oldData) => {
              await axios.put(
                `http://localhost:9000/api/hizmet/${oldData.hizmet_id}`,
                {
                  veri_giris_tarihi: newData.veri_giris_tarihi,
                  donem: newData.donem,
                  hizmet_tipi: newData.hizmet_tipi,
                  erisilen_kisi_sayisi: newData.erisilen_kisi_sayisi,
                  merkez_id: newData.merkez_id,
                }
              );
              dataAl();
            },
            onRowDelete: async (oldData) => {
              await axios.delete(
                `http://localhost:9000/api/hizmet/${oldData.hizmet_id}`
              );
              dataAl();
            },
          }}
        />
      </div>
    </>
  );
};

export default GridTableHizmet;
