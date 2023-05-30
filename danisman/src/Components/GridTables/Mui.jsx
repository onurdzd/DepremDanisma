import MaterialTable from "@material-table/core";
import { useState, useEffect } from "react";
import axios from "axios";

const Mui = () => {
  const [data, setData] = useState([]);

  const dataAl = async () =>
    await axios
      .get("http://localhost:9000/api/kurum")
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
              title: "Id",
              field: "kurum_id",
              type: "numeric" /*checkbox vs olabiliyor*/,
              validate: (rowData) =>
                rowData.kurum_id === undefined || rowData.kurum_id === ""
                  ? "Zorunlu"
                  : true,
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
          ]}
          data={data}
          title="Demo Title"
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  /* setData([...data, newData]); */
                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);
                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);
                  resolve();
                }, 1000);
              }),
          }}
        />
      </div>
    </>
  );
};

export default Mui;
