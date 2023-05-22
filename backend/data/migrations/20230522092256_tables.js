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
    .createTable("personel", (t) => {
      t.increments("personel_id");
      t.timestamp("created_at").defaultTo(knex.fn.now());
      t.string("firstname", 20).notNullable();
      t.string("surname", 20).notNullable();
      t.integer("merkez_id")
        .notNullable()
        .unsigned()
        .references("merkez_id")
        .inTable("merkez")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("sehir", (t) => {
      t.increments("sehir_id");
      t.string("sehir_isim", 20).notNullable();
    })
    .createTable("merkez", (t) => {
      t.increments("merkez_id");
      t.string("merkez_isim", 128).unique().notNullable();
      t.integer("tel", 10).unique().notNullable();
      t.string("adres", 128).notNullable();
      t.integer("sehir_id")
        .unsigned()
        .notNullable()
        .references("sehir_id")
        .inTable("sehir")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("danisan", (t) => {
      t.increments("danisan_id");
      t.timestamp("created_at").defaultTo(knex.fn.now());
      t.string("firstname", 20).notNullable();
      t.string("surname", 20).notNullable();
      t.integer("merkez_id")
        .unsigned()
        .notNullable()
        .references("merkez_id")
        .inTable("merkez")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("kurumlar", (t) => {
      t.increments("kurumlar_id");
      t.string("kurum_isim", 128).notNullable();
      t.integer("sehir_id")
        .unsigned()
        .notNullable()
        .references("sehir_id")
        .inTable("sehir")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("envanterler", (t) => {
      t.increments("envanter_id");
      t.string("envanter_adi", 128).notNullable();
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
    .dropTableIfExists("envanterler")
    .dropTableIfExists("kurumlar")
    .dropTableIfExists("danisan")
    .dropTableIfExists("merkez")
    .dropTableIfExists("sehir")
    .dropTableIfExists("personel")
    .dropTableIfExists("users")
    .dropTableIfExists("roles");
};
