import MaterialTable from "@material-table/core";
import { useState, useEffect } from "react";
import axios from "axios";
import { tr } from "date-fns/locale";

const GridTableMerkez = (localToken) => {
  const [data, setData] = useState([]);

  const dataAl = async () =>
    await axios
      .get(`${import.meta.env.VITE_API_URL}/merkez`,{
        headers: {
          'Authorization': `${localToken.localToken?.token}`
        }
      })
      .then((res) => setData(res.data));
  useEffect(() => {
    dataAl();
  }, []);

  const [sehirIsimAl, setSehirIsimAl] = useState([]);
  let sehirIsimleri = [];
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/sehir`,{
        headers: {
          'Authorization': `${localToken.localToken?.token}`
        }
      })
      .then((res) => setSehirIsimAl(res.data));
  }, []);

  sehirIsimAl.map((item) =>
    sehirIsimleri.push({
      sehir_id: item.sehir_id,
      sehir_isim: item.sehir_isim,
    })
  );

  const uniqueSehir = [];

  const unique = sehirIsimleri.filter((element) => {
    const isDuplicate = uniqueSehir.includes(element.sehir_id);
    if (!isDuplicate) {
      uniqueSehir.push(element.sehir_id);
      return true;
    }
    return false;
  });

  const obj = {};

  unique.forEach((element) => {
    obj[`${element.sehir_id}`] = element.sehir_isim;
  });

  return (
    <>
      <div>
        {/* style={{ maxWidth: "100%" }} */}
        <MaterialTable
          options={{
            filtering: true,
            search: true,
            sorting: true,
            // selection: true,
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
              field: "merkez_id",
              type: "numeric" /*checkbox vs olabiliyor*/,
              editable: false,
              filterPlaceholder: "merkez_id",
            },
            {
              title: "Merkez İsim",
              field: "merkez_isim",
              validate: (rowData) =>
                rowData.merkez_isim === undefined || rowData.merkez_isim === ""
                  ? "Zorunlu"
                  : true,
              filterPlaceholder: "Merkez İsimi",
            },
            {
              title: "Merkez Telefon",
              field: "m_telefon1",
              type: "numeric",
              validate: (rowData) =>
                rowData.m_telefon1 === undefined || rowData.m_telefon1 === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Merkez Telefon 2",
              field: "m_telefon2",
              type: "numeric",
            },
            {
              title: "Merkez Adresi",
              field: "merkez_adres",
              validate: (rowData) =>
                rowData.merkez_adres === undefined ||
                  rowData.merkez_adres === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Merkez Koordinat X",
              field: "merkez_kordinati_x",
              type: "numeric",
              validate: (rowData) =>
                rowData.merkez_kordinati_x === undefined ||
                  rowData.merkez_kordinati_x === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Merkez Koordinat Y",
              field: "merkez_kordinati_y",
              type: "numeric",
              validate: (rowData) =>
                rowData.merkez_kordinati_y === undefined ||
                  rowData.merkez_kordinati_y === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Hizmet Başlangıç Tarihi",
              field: "hizmet_baslangıc_tarihi",
              type: "date",
              dateSetting: { locale: tr },
              validate: (rowData) =>
                rowData.hizmet_baslangıc_tarihi === undefined ||
                  rowData.hizmet_baslangıc_tarihi === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Şehir",
              field: "sehir_id",
              render: (rowData) =>
                unique.find((item) => item.sehir_id == rowData.sehir_id)
                  ?.sehir_isim,
              validate: (rowData) =>
                rowData.sehir_id === undefined || rowData.sehir_id === ""
                  ? "Zorunlu"
                  : true,
              lookup: obj,
            },
          ]}
          data={data}
          title="Merkez Tablo"
          editable={{
            onRowAdd: async (newData) => {
              await axios.post(`${import.meta.env.VITE_API_URL}/merkez`, newData);
              dataAl();
            },
            onRowUpdate: async (newData, oldData) => {
              await axios.put(
                `${import.meta.env.VITE_API_URL}/merkez/${oldData.merkez_id}`,
                {
                  m_telefon: newData.m_telefon,
                  m_telefon2: newData.m_telefon2,
                  merkez_isim: newData.merkez_isim,
                  merkez_adres: newData.merkez_adres,
                  merkez_kordinati_x: newData.merkez_kodinat_x,
                  merkez_kordinati_y: newData.merkez_kodinat_y,
                  hizmet_baslangıc_tarihi: newData.hizmet_baslangıc_tarihi,
                  sehir_id: newData.sehir_id,
                }
              );
              dataAl();
            },
            onRowDelete: async (oldData) => {
              await axios.delete(
                `${import.meta.env.VITE_API_URL}/merkez/${oldData.merkez_id}`
              );
              dataAl();
            },
          }}
          enableGrouping
        />
      </div>
    </>
  );
};

export default GridTableMerkez;
