/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("account_types", (t) => {
      t.increments("account_type_id");
      t.string("account_type_name");
    })
    .createTable("roles", (t) => {
      t.increments("role_id");
      t.string("role_name");
    })
    .createTable("users", (t) => {
      t.increments("user_id");
      t.timestamp('created_at').defaultTo(knex.fn.now())
      t.string("username", 20).unique().notNullable();
      t.string("password", 120).notNullable();
      t.string("mail", 30).unique().notNullable();
      t.integer("role_id")
        .notNullable()
        .unsigned()
        .references("role_id")
        .inTable("roles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      t.integer("account_type_id")
        .notNullable()
        .unsigned()
        .references("account_type_id")
        .inTable("account_types")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("tweets", (t) => {
      t.increments("tweet_id");
      t.timestamp('created_at').defaultTo(knex.fn.now())
      t.string("tweet", 120).unique().notNullable();
      t.integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("comments", (t) => {
      t.increments("comment_id");
      t.timestamp('created_at').defaultTo(knex.fn.now())
      t.string("comment", 65).notNullable();
      t.integer("tweet_id")
        .unsigned()
        .notNullable()
        .references("tweet_id")
        .inTable("tweets")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      t.integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("likes", (t) => {
      t.increments("like_id");
      t.timestamp('created_at').defaultTo(knex.fn.now())
      t.integer("tweet_id")
        .unsigned()
        .notNullable()
        .references("tweet_id")
        .inTable("tweets")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      t.integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("retweets", (t) => {
      t.increments("retweet_id");
      t.timestamp('created_at').defaultTo(knex.fn.now())
      t.integer("tweet_id")
        .unsigned()
        .notNullable()
        .references("tweet_id")
        .inTable("tweets")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      t.integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("favorites", (t) => {
      t.increments("favorite_id");
      t.timestamp('created_at').defaultTo(knex.fn.now())
      t.integer("tweet_id")
        .unsigned()
        .notNullable()
        .references("tweet_id")
        .inTable("tweets")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      t.integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    }).createTable("followers",t=>{
      t.increments("follower_id")
      t.timestamp('created_at').defaultTo(knex.fn.now())
      t.integer("follower_user_id").notNullable().unsigned()
      t.integer("user_id")
      .unsigned()
      .notNullable()
      .references("user_id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    }).createTable("followings",t=>{
      t.increments("follower_id")
      t.timestamp('created_at').defaultTo(knex.fn.now())
      t.integer("following_user_id").notNullable().unsigned()
      t.integer("user_id")
      .unsigned()
      .notNullable()
      .references("user_id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists("followings")
    .dropTableIfExists("followers")
    .dropTableIfExists("favorites")
      .dropTableIfExists("retweets")
      .dropTableIfExists("likes")
      .dropTableIfExists("comments")
      .dropTableIfExists("tweets")
      .dropTableIfExists("users")
      .dropTableIfExists("roles")
      .dropTableIfExists("account_types");
  };
