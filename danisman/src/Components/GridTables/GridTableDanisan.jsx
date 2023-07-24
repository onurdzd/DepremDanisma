import MaterialTable from "@material-table/core";
import { useState, useEffect } from "react";
import axios from "axios";

const GridTableDanisan = (localToken) => {
  const [data, setData] = useState([]);

  const dataAl = async () =>
    await axios
      .get(`${import.meta.env.VITE_API_URL}/danisan`, {
        headers: {
          Authorization: `${localToken.localToken?.token}`,
        },
      })
      .then((res) => setData(res.data));
  useEffect(() => {
    dataAl();
  }, []);

  const [DanisanIsimAl, setDanisanIsimAl] = useState([]);
  let danisanIsimleri = [];
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/danisan`, {
        headers: {
          Authorization: `${localToken.localToken?.token}`,
        },
      })
      .then((res) => setDanisanIsimAl(res.data));
  }, []);

  DanisanIsimAl.map((item) =>
    danisanIsimleri.push({
      danisan_id: item.danisan_id,
      danisan_ad: item.danisan_ad,
    })
  );

  const uniqueDanisan = [];

  const unique = danisanIsimleri.filter((element) => {
    const isDuplicate = uniqueDanisan.includes(element.danisan_id);
    if (!isDuplicate) {
      uniqueDanisan.push(element.danisan_id);
      return true;
    }
    return false;
  });

  const obj = {};

  unique.forEach((element) => {
    obj[`${element.danisan_id}`] = element.danisan_ad;
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
              field: "danisan_id",
              type: "numeric" /*checkbox vs olabiliyor*/,
              editable: false,
            },
            {
              title: " Ad",
              field: "danisan_ad",
              validate: (rowData) =>
                rowData.danisan_ad === undefined || rowData.danisan_ad === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Soyad",
              field: "danisan_soyad",
              validate: (rowData) =>
                rowData.danisan_soyad === undefined ||
                  rowData.danisan_soyad === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Telefon",
              field: "danisan_tel_no",
              type: "numeric",
              validate: (rowData) =>
                rowData.danisan_tel_no === undefined ||
                  rowData.danisan_tel_no === ""
                  ? "Zorunlu"
                  : true,
            },

            {
              title: "Bulunduğu İl",
              field: "danisan_il",
              validate: (rowData) =>
                rowData.danisan_il === undefined || rowData.danisan_il === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Kişi",
              field: "danisan_kisi",
              validate: (rowData) =>
                rowData.danisan_kisi === undefined ||
                  rowData.danisan_kisi === ""
                  ? "Zorunlu"
                  : true,
              lookup: { 1: "Kendim", 0: "Yakınım" },
            },

            {
              title: "Açıklama",
              field: "danisan_aciklama",
              validate: (rowData) =>
                rowData.danisan_aciklama === undefined ||
                  rowData.danisan_aciklama === ""
                  ? "Zorunlu"
                  : true,
            },
          ]}
          data={data}
          title="Destek Başvuru Tablosu"
          editable={{
            onRowAdd: async (newData) => {
              await axios.post(`${import.meta.env.VITE_API_URL}/danisan`, newData);
              dataAl();
            },
            onRowUpdate: async (newData, oldData) => {
              await axios.put(
                `${import.meta.env.VITE_API_URL}/danisan/${oldData.danisan_id}`,
                {
                  danisan_ad: newData.danisan_ad,
                  danisan_soyad: newData.danisan_soyad,
                  danisan_tel_no: newData.danisan_tel_no,
                  danisan_il: newData.danisan_il,
                  danisan_kisi: newData.danisan_kisi,
                  danisan_aciklama: newData.danisan_aciklama,
                }
              );
              dataAl();
            },
            onRowDelete: async (oldData) => {
              await axios.delete(
                `${import.meta.env.VITE_API_URL}/danisan/${oldData.danisan_id}`
              );
              dataAl();
            },
          }}
        />
      </div>
    </>
  );
};

export default GridTableDanisan;
