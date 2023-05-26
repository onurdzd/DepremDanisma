/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("roles").truncate();
  await knex("users").truncate();
  await knex("sehir").truncate();
  await knex("merkez").truncate();
  await knex("personel").truncate();
  await knex("kurum").truncate();
  await knex("envanter").truncate();
  await knex("hizmet").truncate();
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
  await knex("sehir").insert([
    {
      sehir_isim: "Gaziantep",
      sehir_merkezi_kordinati_x: 37.065925,
      sehir_merkezi_kordinati_y: 37.378097,
    },
    {
      sehir_isim: "Adana",
      sehir_merkezi_kordinati_x: 36.991407,
      sehir_merkezi_kordinati_y: 35.330828,
    },
    {
      sehir_isim: "Malatya",
      sehir_merkezi_kordinati_x: 38.355351,
      sehir_merkezi_kordinati_y: 38.333525,
    },
    {
      sehir_isim: "Adıyaman",
      sehir_merkezi_kordinati_x: 37.763639,
      sehir_merkezi_kordinati_y: 38.277259,
    },
    {
      sehir_isim: "Osmaniye",
      sehir_merkezi_kordinati_x: 37.074617,
      sehir_merkezi_kordinati_y: 36.246401,
    },
    {
      sehir_isim: "Kilis",
      sehir_merkezi_kordinati_x: 36.716469,
      sehir_merkezi_kordinati_y: 37.114661,
    },
    {
      sehir_isim: "Hatay",
      sehir_merkezi_kordinati_x: 36.202591,
      sehir_merkezi_kordinati_y: 36.160403,
    },
    {
      sehir_isim: "Şanlıurfa",
      sehir_merkezi_kordinati_x: 37.167395,
      sehir_merkezi_kordinati_y: 38.795517,
    },
    {
      sehir_isim: "Kahramanmaraş",
      sehir_merkezi_kordinati_x: 37.575263,
      sehir_merkezi_kordinati_y: 36.922816,
    },
    {
      sehir_isim: "Diyarbakır",
      sehir_merkezi_kordinati_x: 37.924966,
      sehir_merkezi_kordinati_y: 40.210992,
    },
  ]);
  await knex("merkez").insert([
    {
      merkez_isim: "İbb afet kordinasyon merkezi",
      m_telefon1: 25332890061,
      merkez_adres: "İskenderun",
      merkez_kordinati_x: 36.540673,
      merkez_kordinati_y: 36.540673,
      hizmet_baslangıc_tarihi: "08-03-2023",
      sehir_id: 7,
    },
  ]);
  await knex("personel").insert([
    {
      firstname: "ali",
      surname: "yılmaz",
      p_telefon1: 5333333333,
      TC: 33333333333,
      kan_grubu: "A+",
      ikamet_adresi: "zart mahallesi zort sokak zırt ap no:23 d:4",
      calisma_durumu: true,
      proje_saha_adresi: "zort mahallesi zart sokak konteyner no:2",
      ADAK_adı_soyadı: "Mahmut Tuncer",
      ADAK_telefon: 05444444444,
      ADAK_Bağı: "Anne",
      merkez_id: 1,
    },
    {
      firstname: "mert",
      surname: "gök",
      p_telefon1: 5333333233,
      TC: 33333333233,
      kan_grubu: "B+",
      ikamet_adresi: " zırt ap no:23 d:4",
      calisma_durumu: true,
      proje_saha_adresi: "zort mah konteyner no:2",
      ADAK_adı_soyadı: "ahmet Tuncer",
      ADAK_telefon: 05444442444,
      ADAK_Bağı: "Baba",
      merkez_id: 1,
    },
    {
      firstname: "onur",
      surname: "dizdar",
      p_telefon1: 5332333233,
      TC: 33332333233,
      kan_grubu: "B+",
      ikamet_adresi: " zırt ap no:23 d:4",
      calisma_durumu: false,
      proje_saha_adresi: "zort konteyner no:2",
      ADAK_adı_soyadı: "ahmet abb",
      ADAK_telefon: 05444342444,
      ADAK_Bağı: "Baba",
      merkez_id: 1,
    },
    {
      firstname: "meltem",
      surname: "elgün",
      p_telefon1: 5332333213,
      TC: 33332333213,
      kan_grubu: "0+",
      ikamet_adresi: "no:23 d:4",
      calisma_durumu: false,
      proje_saha_adresi: "zort no:2",
      ADAK_adı_soyadı: "mehmet abb",
      ADAK_telefon: 05442342444,
      ADAK_Bağı: "Kuzen",
      merkez_id: 1,
    },
    {
      firstname: "fatih",
      surname: "tekke",
      p_telefon1: 4332333213,
      TC: 33332333210,
      kan_grubu: "0++",
      ikamet_adresi: "no:23 d:4",
      calisma_durumu: true,
      proje_saha_adresi: "no:2",
      ADAK_adı_soyadı: "abb",
      ADAK_telefon: 05442341444,
      ADAK_Bağı: "Kuzen",
      merkez_id: 1,
    },
    {
      firstname: "veli",
      surname: "yılmaz",
      p_telefon1: 5333333322,
      TC: 12345673334,
      kan_grubu: "A+",
      ikamet_adresi: "zart mahallesi zort sokak zırt ap no:23 d:4",
      calisma_durumu: true,
      proje_saha_adresi: "zort mahallesi zart sokak konteyner no:2",
      ADAK_adı_soyadı: "Mahmut Mert",
      ADAK_telefon: 05444454444,
      ADAK_Bağı: "Anne",
      merkez_id: 1,
    },
  ]);
  await knex("kurum").insert([
    { kurum_adi: "İzmit Belediyesi", kurum_adi_kisaltma: "İB", merkez_id: 1 },
  ]);
  await knex("envanter").insert([
    { envanter_adi: "Araba", tür: "Araç", envanter_adet: 2, merkez_id: 1 },
  ]);
  await knex("hizmet").insert([
    {
      donem: "05-2023",
      hizmet_tipi: "Psikolojik Destek",
      erisilen_kisi_sayisi: 20,
      merkez_id: 1,
    },
    {
      donem: "05-2023",
      hizmet_tipi: "Sağlık Tedavi Desteği",
      erisilen_kisi_sayisi: 10,
      merkez_id: 1,
    },
  ]);
};
