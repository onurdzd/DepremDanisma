import MaterialTable from "@material-table/core";
import { useState, useEffect } from "react";
import axios from "axios";

const GridTableSehir = (localToken) => {
  const [data, setData] = useState([]);

  const dataAl = async () =>
    await axios
      .get(`${import.meta.env.VITE_API_URL}/sehir`,{
        headers: {
          'Authorization': `${localToken.localToken?.token}`
        }
      })
      .then((res) => setData(res.data));
  useEffect(() => {
    dataAl();
  }, []);

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
              field: "sehir_id",
              type: "numeric" /*checkbox vs olabiliyor*/,
              editable: false,
            },
            {
              title: "Sehir Adı",
              field: "sehir_isim",
              validate: (rowData) =>
                rowData.sehir_isim === undefined || rowData.sehir_isim === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Sehir Açıklama",
              field: "sehir_aciklama",
            },
            {
              title: "Sehir Merkezi Kordinatı X",
              field: "sehir_merkezi_kordinati_x",
              type: "numeric",
              validate: (rowData) =>
                rowData.sehir_merkezi_kordinati_x === undefined ||
                  rowData.sehir_merkezi_kordinati_x === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Sehir Merkezi Kordinatı Y",
              field: "sehir_merkezi_kordinati_y",
              type: "numeric",
              validate: (rowData) =>
                rowData.sehir_merkezi_kordinati_y === undefined ||
                  rowData.sehir_merkezi_kordinati_y === ""
                  ? "Zorunlu"
                  : true,
            },
          ]}
          data={data}
          title="Sehir Tablo"
          editable={{
            onRowAdd: async (newData) => {
              await axios.post(`${import.meta.env.VITE_API_URL}/sehir`, newData);
              dataAl();
            },
            onRowUpdate: async (newData, oldData) => {
              await axios.put(
                `${import.meta.env.VITE_API_URL}/sehir/${oldData.sehir_id}`,
                {
                  sehir_aciklama: newData.sehir_aciklama,
                  sehir_isim: newData.sehir_isim,
                  sehir_merkezi_kordinati_x: newData.sehir_merkezi_kordinati_x,
                  sehir_merkezi_kordinati_y: newData.sehir_merkezi_kordinati_y,
                }
              );
              dataAl();
            },
            onRowDelete: async (oldData) => {
              await axios.delete(
                `${import.meta.env.VITE_API_URL}/sehir/${oldData.sehir_id}`
              );
              dataAl();
            },
          }}
        />
      </div>
    </>
  );
};

export default GridTableSehir;
