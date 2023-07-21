import MaterialTable from "@material-table/core";
import { useState, useEffect } from "react";
import axios from "axios";
import { tr } from "date-fns/locale";

const GridTableGonullu = (localToken) => {
  const [data, setData] = useState([]);

  const dataAl = async () =>
    await axios
      .get(`${import.meta.env.VITE_API_URL}/gonullu`, {
        headers: {
          Authorization: `${localToken.localToken?.token}`,
        },
      })
      .then((res) => setData(res.data));
  useEffect(() => {
    dataAl();
  }, []);

  const [gonulluIsimAl, setgonulluIsimAl] = useState([]);
  let gonulluIsimleri = [];
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/gonullu`, {
        headers: {
          Authorization: `${localToken.localToken?.token}`,
        },
      })
      .then((res) => setgonulluIsimAl(res.data));
  }, []);

  gonulluIsimAl.map((item) =>
    gonulluIsimleri.push({
      gonullu_id: item.gonullu_id,
      gomullu_ad: item.gonullu_ad,
    })
  );

  const uniqueGonullu = [];

  const unique = gonulluIsimleri.filter((element) => {
    const isDuplicate = uniqueGonullu.includes(element.gonullu_id);
    if (!isDuplicate) {
      uniqueGonullu.push(element.gonullu_id);
      return true;
    }
    return false;
  });

  const obj = {};

  unique.forEach((element) => {
    obj[`${element.gonullu_id}`] = element.gonullu_ad;
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
              field: "gonullu_id",
              type: "numeric" /*checkbox vs olabiliyor*/,
              editable: false,
            },
            {
              title: " Ad",
              field: "gonullu_ad",
              validate: (rowData) =>
                rowData.gonullu_ad === undefined || rowData.gonullu_ad === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Soyad",
              field: "gonullu_soyad",
              validate: (rowData) =>
                rowData.gonullu_soyad === undefined ||
                  rowData.gonullu_soyad === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Telefon",
              field: "gonullu_tel_no",
              type: "numeric",
              validate: (rowData) =>
                rowData.gonullu_tel_no === undefined ||
                  rowData.gonullu_tel_no === ""
                  ? "Zorunlu"
                  : true,
            },

            {
              title: "Çalışmak İstediği İl",
              field: "gonullu_calismak_istedigi_il",
              validate: (rowData) =>
                rowData.gonullu_calismak_istedigi_il === undefined ||
                  rowData.gonullu_calismak_istedigi_il === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Başlangıç Tarihi",
              field: "gonullu_baslangic_tarihi",
              type: "date",
              dateSetting: { locale: tr },
              validate: (rowData) =>
                rowData.gonullu_baslangic_tarihi === undefined ||
                  rowData.gonullu_baslangic_tarihi === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Bitiş Tarihi",
              field: "gonullu_bitis_tarihi",
              type: "date",
              dateSetting: { locale: tr },
              validate: (rowData) =>
                rowData.gonullu_bitis_tarihi === undefined ||
                  rowData.gonullu_bitis_tarihi === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Açıklama",
              field: "gonullu_motivasyon_aciklama",
              validate: (rowData) =>
                rowData.gonullu_motivasyon_aciklama === undefined ||
                  rowData.gonullu_motivasyon_aciklama === ""
                  ? "Zorunlu"
                  : true,
            },
          ]}
          data={data}
          title="Gonullu Başvuru Tablosu"
          editable={{
            onRowAdd: async (newData) => {
              await axios.post(`${import.meta.env.VITE_API_URL}/gonullu`, newData);
              dataAl();
            },
            onRowUpdate: async (newData, oldData) => {
              await axios.put(
                `${import.meta.env.VITE_API_URL}/gonullu/${oldData.gonullu_id}`,
                {
                  gonullu_ad: newData.gonullu_ad,
                  gonullu_soyad: newData.gonullu_soyad,
                  gonullu_tel_no: newData.gonullu_tel_no,
                  gonullu_calismak_istedigi_il:
                    newData.gonullu_calismak_istedigi_il,
                  gonullu_baslangic_tarihi: newData.gonullu_baslangic_tarihi,
                  gonullu_bitis_tarihi: newData.gonullu_bitis_tarihi,
                  gonullu_motivasyon_aciklama:
                    newData.gonullu_motivasyon_aciklama,
                }
              );
              dataAl();
            },
            onRowDelete: async (oldData) => {
              await axios.delete(
                `${import.meta.env.VITE_API_URL}/gonullu/${oldData.gonullu_id}`
              );
              dataAl();
            },
          }}
        />
      </div>
    </>
  );
};

export default GridTableGonullu;
