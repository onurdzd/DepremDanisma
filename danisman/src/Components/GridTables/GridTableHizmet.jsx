import { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "@material-table/core";
import { tr } from "date-fns/locale";

const GridTableHizmet = (localToken) => {
  const [data, setData] = useState([]);

  const dataAl = async () =>
    await axios
      .get(`${import.meta.env.VITE_API_URL}/hizmet`)
      .then((res) => setData(res.data));
  useEffect(() => {
    dataAl();
  }, []);

  const [merkezIsimAl, setMerkezIsimAl] = useState([]);
  let merkezIsimleri = [];
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/merkez`,{
        headers: {
          'Authorization': `${localToken.localToken?.token}`
        }
      })
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

  const obj = {};

  unique.forEach((element) => {
    obj[`${element.merkez_id}`] = element.merkez_isim;
  });

  return (
    <>
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          options={{
            filtering: true,
            search: true,
            sorting: true,
            showSelectAllCheckbox: false,
            showTextRowsSelected: false,

            // pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
            columnsButton: true,
            toolbarButtonColor: "#007bff",
            rowStyle: (data, index) =>
              index % 2 === 0 ? { background: "#f5f5f5" } : null,
            headerStyle: {
              background: "#f44336e4",
              color: "#fff",
              borderWidth: "1px",
            },
            padding: "dense",
            filterCellStyle: { padding: "1px" },
          }}
          columns={[
            {
              title: "Id",
              field: "hizmet_id",
              type: "numeric" /*checkbox vs olabiliyor*/,
              editable: false,
            },
            {
              title: "Veri Giriş Tarihi",
              type: "date",
              dateSetting: { locale: tr },
              field: "hizmet_created_at",
              editable: false,
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
              lookup: obj,
            },
          ]}
          data={data}
          title="Hizmet Tablosu"
          editable={{
            onRowAdd: async (newData) => {
              await axios.post(`${import.meta.env.VITE_API_URL}/hizmet`, newData);
              dataAl();
            },
            onRowUpdate: async (newData, oldData) => {
              await axios.put(
                `${import.meta.env.VITE_API_URL}/hizmet/${oldData.hizmet_id}`,
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
                `${import.meta.env.VITE_API_URL}/hizmet/${oldData.hizmet_id}`
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
