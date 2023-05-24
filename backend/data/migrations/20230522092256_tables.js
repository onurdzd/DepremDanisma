/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("roles", (t) => {
      t.increments("role_id");
      t.string("role_name").defaultTo("user");
    })
    .createTable("users", (t) => {
      t.increments("user_id");
      t.string("username", 20).unique().notNullable();
      t.string("password", 120).notNullable();
      t.integer("role_id")
        .notNullable()
        .unsigned()
        .references("role_id")
        .inTable("roles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("sehir", (t) => {
      t.increments("sehir_id");
      t.string("sehir_isim", 20).notNullable().unique();
      t.string("sehir_aciklama", 500);
      t.decimal("sehir_merkezi_kordinati_x", 9).notNullable();
      t.decimal("sehir_merkezi_kordinati_y", 9).notNullable();
    })
    .createTable("merkez", (t) => {
      t.increments("merkez_id");
      t.string("merkez_isim", 128).unique().notNullable();
      t.integer("telefon1", 11).notNullable();
      t.integer("telefon2", 11);
      t.string("merkez_adres", 128).notNullable();
      t.decimal("merkez_kordinati_x", 9).notNullable();
      t.decimal("merkez_kordinati_y", 9).notNullable();
      t.dateTime("hizmet_baslangıc_tarihi").notNullable();
      t.integer("sehir_id")
        .unsigned()
        .notNullable()
        .references("sehir_id")
        .inTable("sehir")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("personel", (t) => {
      t.increments("personel_id");
      t.timestamp("personel_created_at").defaultTo(knex.fn.now());
      t.string("firstname", 20).notNullable();
      t.string("surname", 20).notNullable();
      t.integer("telefon1", 11).notNullable().unique();
      t.integer("telefon2", 11).unique();
      t.integer("TC", 11).notNullable().unique();
      t.string("kan_grubu", 10).notNullable();
      t.string("ikamet_adresi", 256).notNullable();
      t.boolean("calisma_durumu").notNullable();
      t.string("proje_saha_adresi", 256).notNullable();
      t.string("ADAK_adı_soyadı", 30).notNullable();
      t.integer("ADAK_telefon", 11).notNullable().unique();
      t.string("ADAK_Bağı", 30).notNullable();
      t.integer("merkez_id")
        .notNullable()
        .unsigned()
        .references("merkez_id")
        .inTable("merkez")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("kurum", (t) => {
      t.increments("kurum_id");
      t.string("kurum_adi", 128).notNullable();
      t.string("kurum_adi_kisaltma", 20).notNullable();
      t.string("kurum_aciklama", 500);
      t.string("kurum_link", 128);
      t.string("kurum_logo_link", 128);
      t.integer("merkez_id")
        .unsigned()
        .notNullable()
        .references("merkez_id")
        .inTable("merkez")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("envanter", (t) => {
      t.increments("envanter_id");
      t.string("envanter_adi", 128).notNullable();
      t.string("tür", 50).notNullable();
      t.string("envanter_aciklama", 500);
      t.integer("merkez_id")
        .unsigned()
        .notNullable()
        .references("merkez_id")
        .inTable("merkez")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("hizmet", (t) => {
      t.increments("hizmet_id");
      t.timestamp("hizmet_created_at").defaultTo(knex.fn.now());
      t.dateTime("donem");
      t.string("hizmet_tipi", 50).notNullable();
      t.integer("erisilen_kisi_sayisi", 5).notNullable();
      t.integer("merkez_id")
        .unsigned()
        .notNullable()
        .references("merkez_id")
        .inTable("merkez")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("hizmet")
    .dropTableIfExists("envanter")
    .dropTableIfExists("kurum")
    .dropTableIfExists("personel")
    .dropTableIfExists("merkez")
    .dropTableIfExists("sehir")
    .dropTableIfExists("users")
    .dropTableIfExists("roles");
};