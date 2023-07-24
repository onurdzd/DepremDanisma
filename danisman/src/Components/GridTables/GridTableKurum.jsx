import MaterialTable from "@material-table/core";
import { useState, useEffect } from "react";
import axios from "axios";

const GridTableKurum = (localToken) => {
  const [data, setData] = useState([]);

  const dataAl = async () =>
    await axios
      .get(`${import.meta.env.VITE_API_URL}/kurum`,{
        headers: {
          'Authorization': `${localToken.localToken?.token}`
        }
      })
      .then((res) => setData(res.data));
  useEffect(() => {
    dataAl();
  }, []);

  const [merkezIsimAl, setMerkezIsimAl] = useState([]);
  let merkezIsimleri = [];
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}api/merkez`,{
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
              field: "kurum_id",
              type: "numeric" /*checkbox vs olabiliyor*/,
              editable: false,
            },
            {
              title: "Adı",
              field: "kurum_adi",
              validate: (rowData) =>
                rowData.kurum_adi === undefined || rowData.kurum_adi === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Kurum Adı Kısaltma",
              field: "kurum_adi_kisaltma",
              validate: (rowData) =>
                rowData.kurum_adi_kisaltma === undefined ||
                  rowData.kurum_adi_kisaltma === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Kurum Açıklama",
              field: "kurum_aciklama",
            },
            {
              title: "Kurum Link",
              field: "kurum_link",
            },
            {
              title: "Kurum Logo Link",
              field: "kurum_logo_link",
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
          title="Kurum Tablo"
          editable={{
            onRowAdd: async (newData) => {
              await axios.post(`${import.meta.env.VITE_API_URL}/kurum`, newData);
              dataAl();
            },
            onRowUpdate: async (newData, oldData) => {
              await axios.put(
                `${import.meta.env.VITE_API_URL}/kurum/${oldData.kurum_id}`,
                {
                  kurum_aciklama: newData.kurum_aciklama,
                  kurum_adi: newData.kurum_adi,
                  kurum_adi_kisaltma: newData.kurum_adi_kisaltma,
                  kurum_link: newData.kurum_link,
                  kurum_logo_link: newData.kurum_logo_link,
                  merkez_id: newData.merkez_id,
                }
              );
              dataAl();
            },
            onRowDelete: async (oldData) => {
              await axios.delete(
                `${import.meta.env.VITE_API_URL}/kurum/${oldData.kurum_id}`
              );
              dataAl();
            },
          }}
        />
      </div>
    </>
  );
};

export default GridTableKurum;
