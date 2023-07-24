import MaterialTable from "@material-table/core";
import { useState, useEffect } from "react";
import axios from "axios";

const GridTablePersonel = (localToken) => {
  const [data, setData] = useState([]);

  const dataAl = async () =>
    await axios
      .get(`${import.meta.env.VITE_API_URL}/personel`,{
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
              field: "personel_id",
              type: "numeric" /*checkbox vs olabiliyor*/,
              editable: false,
            },
            {
              title: "Adı",
              field: "firstname",
              validate: (rowData) =>
                rowData.firstname === undefined || rowData.firstname === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Soyadı",
              field: "surname",
              validate: (rowData) =>
                rowData.surname === undefined || rowData.surname === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Telefon",
              field: "p_telefon1",
              type: "numeric",
              validate: (rowData) =>
                rowData.p_telefon1 === undefined || rowData.p_telefon1 === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Telefon 2",
              field: "p_telefon2",
              type: "numeric",
            },
            {
              title: "TC",
              field: "TC",
              type: "numeric",
              validate: (rowData) =>
                rowData.TC === undefined || rowData.TC === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Kan Grubu",
              field: "kan_grubu",
              validate: (rowData) =>
                rowData.kan_grubu === undefined || rowData.kan_grubu === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "İkamet Adresi",
              field: "ikamet_adresi",
              validate: (rowData) =>
                rowData.ikamet_adresi === undefined ||
                  rowData.ikamet_adresi === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Çalışma Durumu",
              field: "calisma_durumu",
              validate: (rowData) =>
                rowData.calisma_durumu === undefined ||
                  rowData.calisma_durumu === ""
                  ? "Zorunlu"
                  : true,
              lookup: { 0: "Çalışmıyor", 1: "Çalışıyor" },
            },
            {
              title: "Proje Saha Adresi",
              field: "proje_saha_adresi",
              validate: (rowData) =>
                rowData.proje_saha_adresi === undefined ||
                  rowData.proje_saha_adresi === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "ADAK Ad Soyad",
              field: "ADAK_adı_soyadı",
              validate: (rowData) =>
                rowData.ADAK_adı_soyadı === undefined ||
                  rowData.ADAK_adı_soyadı === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "ADAK Telefon",
              field: "ADAK_telefon",
              validate: (rowData) =>
                rowData.ADAK_telefon === undefined ||
                  rowData.ADAK_telefon === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "ADAK İle Bağı",
              field: "ADAK_Bağı",
              validate: (rowData) =>
                rowData.ADAK_Bağı === undefined || rowData.ADAK_Bağı === ""
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
          title="Personel Tablo  "
          editable={{
            onRowAdd: async (newData) => {
              await axios.post(`${import.meta.env.VITE_API_URL}/personel`, newData);
              dataAl();
            },
            onRowUpdate: async (newData, oldData) => {
              await axios.put(
                `${import.meta.env.VITE_API_URL}/personel/${oldData.personel_id}`,
                {
                  firstname: newData.firstname,
                  surname: newData.surname,
                  p_telefon1: newData.p_telefon1,
                  p_telefon2: newData.p_telefon2,
                  TC: newData.TC,
                  kan_grubu: newData.kan_grubu,
                  ikamet_adresi: newData.ikamet_adresi,
                  calisma_durumu: newData.calisma_durumu,
                  proje_saha_adresi: newData.proje_saha_adresi,
                  ADAK_adı_soyadı: newData.ADAK_adı_soyadı,
                  ADAK_telefon: newData.ADAK_telefon,
                  ADAK_Bağı: newData.ADAK_Bağı,
                  merkez_id: newData.merkez_id,
                }, {
                headers: {
                  'Authorization': `${localToken.localToken?.token}`
                }
              }
              );
              dataAl();
            },
            onRowDelete: async (oldData) => {
              console.log(oldData.personel_id)
              await axios.delete(
                `${import.meta.env.VITE_API_URL}/personel/${oldData.personel_id}`
                ,{
                  headers: {
                    'Authorization': `${localToken.localToken?.token}`
                  }
                });
              dataAl();
            },
          }}
        />
      </div>
    </>
  );
};

export default GridTablePersonel;
