import MaterialTable from "@material-table/core";
import { useState, useEffect } from "react";
import axios from "axios";

const GridTableEnvanter = () => {
  const [data, setData] = useState([]);

  const dataAl = async () =>
    await axios
      .get("http://localhost:9000/api/envanter")
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
            sorting: true,
          }}
          columns={[
            {
              title: "Id",
              field: "envanter_id",
              type: "numeric" /*checkbox vs olabiliyor*/,
              editable: false,
            },
            {
              title: "Envanter Adı",
              field: "envanter_adi",
              validate: (rowData) =>
                rowData.envanter_adi === undefined || rowData.envanter_adi === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Envanter Tür",
              field: "envanter_tur",
              validate: (rowData) =>
                rowData.envanter_tur === undefined || rowData.envanter_tur === ""
                  ? "Zorunlu"
                  : true,
            },
            {
              title: "Envanter Açıklama",
              field: "envanter_aciklama",
            },
            {
              title: "Envanter Adet",
              field: "envanter_adet",
              validate: (rowData) =>
                rowData.envanter_adet === undefined || rowData.envanter_adet === ""
                  ? "Zorunlu"
                  : true
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
<<<<<<< HEAD
=======
              lookup: unique.map(item=>item.merkez_isim)      
>>>>>>> c5e2973425e284dd578c12bafa7824774cc18650
            },
          ]}
          data={data}
          title="Envanter Tablo"
          editable={{
            onRowAdd: async (newData) => {
              await axios.post("http://localhost:9000/api/envanter", newData);
              dataAl();
            },
            onRowUpdate: async (newData, oldData) => {
              await axios.put(
                `http://localhost:9000/api/envanter/${oldData.envanter_id}`,
                {
                  envanter_aciklama: newData.envanter_aciklama,
                  envanter_adi: newData.envanter_adi,
                  envanter_tur: newData.envanter_tur,
                  envanter_adet: newData.envanter_adet,
                  merkez_id: newData.merkez_id,
                }
              );
              dataAl();
            },
            onRowDelete:async (oldData) =>{
            await axios.delete(`http://localhost:9000/api/envanter/${oldData.envanter_id}`);
            dataAl();}
          }}
        />
      </div>
    </>
  );
};

export default GridTableEnvanter;
