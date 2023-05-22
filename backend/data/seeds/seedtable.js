/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("roles").truncate();
  await knex("users").truncate();
  await knex("personel").truncate();
  await knex("sehir").truncate();
  await knex("merkez").truncate();
  await knex("danisan").truncate();
  await knex("kurumlar").truncate();
  await knex("envanterler").truncate();

  await knex("roles").insert([{ role_name: "admin" }, { role_name: "user" }]);
  await knex("users").insert([
    {
      username: "admin",
      password: "$2a$08$g2w139CcnT46xKKzNiAu2.Atep8AcgsHGDxfNoG2ClfeaBDIPh9em",
      /*1234*/ role_id: 1,
    },
    {
      username: "kullanici1",
      password: "$2a$08$g2w139CcnT46xKKzNiAu2.Atep8AcgsHGDxfNoG2ClfeaBDIPh9em",
      /*1234*/ role_id: 2,
    },
    {
      username: "kullanici2",
      password: "$2a$08$g2w139CcnT46xKKzNiAu2.Atep8AcgsHGDxfNoG2ClfeaBDIPh9em",
      /*1234*/ role_id: 2,
    },
    {
      username: "kullanici3",
      password: "$2a$08$g2w139CcnT46xKKzNiAu2.Atep8AcgsHGDxfNoG2ClfeaBDIPh9em",
      /*1234*/ role_id: 2,
    },
    {
      username: "kullanici4",
      password: "$2a$08$g2w139CcnT46xKKzNiAu2.Atep8AcgsHGDxfNoG2ClfeaBDIPh9em",
      /*1234*/ role_id: 2,
    },
  ]);
  await knex("personel").insert([
    {
      firstname: "ali",
      surname: "yılmaz",
      merkez_id: 1,
    },
    {
      firstname: "veli",
      surname: "yılmaz",
      merkez_id: 2,
    },
    {
      firstname: "ayşe",
      surname: "yılmaz",
      merkez_id: 2,
    },
  ]);
  await knex("sehir").insert([
    { sehir_isim: "Gaziantep" },
    { sehir_isim: "Adana" },
    { sehir_isim: "Malatya" },
    { sehir_isim: "Adıyaman" },
    { sehir_isim: "Osmaniye" },
    { sehir_isim: "Kilis" },
    { sehir_isim: "Hatay" },
    { sehir_isim: "Şanlıurfa" },
    { sehir_isim: "Kahramanmaraş" },
    { sehir_isim: "Diyarbakır" },
  ]);
  await knex("merkez").insert([
    {
      merkez_isim: "İbb afet kordinasyon merkezi",
      tel: 5332890061,
      adres: "İskenderun",
      sehir_id: 7,
    },
    {
      merkez_isim: "Harbiye / Hidropark Çadırkent",
      tel: 5332890061,
      adres: "İskenderun",
      sehir_id: 7,
    },
    {
      merkez_isim: "Samandağ Konteyner Kent",
      tel: 5356289052,
      adres: "Samandağ",
      sehir_id: 7,
    },
    {
      merkez_isim: "Orhanlı Konteyner Kent",
      tel: 5356289052,
      adres: "Antakya",
      sehir_id: 7,
    },
  ]);
  await knex("danisan").insert([
    {
      firstname: "Mert",
      surname: "random",
      merkez_id: 2,
    },
    {
      firstname: "Ali",
      surname: "random",
      merkez_id: 3,
    },
    {
      firstname: "Veli",
      surname: "random",
      merkez_id: 1,
    },
    {
      firstname: "Onur",
      surname: "random",
      merkez_id: 2,
    },
  ]);
  await knex("kurumlar").insert([
    { kurum_isim: "İzmit Belediyesi", sehir_id: 7 },
    { kurum_isim: "AÇEV", sehir_id: 7 },
    { kurum_isim: "İBB", sehir_id: 7 },
    { kurum_isim: "UNİCEF", sehir_id: 7 },
    { kurum_isim: "MOR Yerleşke", sehir_id: 7 },
  ]);

  await knex("envanterler").insert([{ envanter_adi: "Araç", merkez_id: 3 }]);
};
