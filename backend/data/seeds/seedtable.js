/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('account_types').truncate()
  await knex('roles').truncate()
  await knex('users').truncate()
  await knex('tweets').truncate()
  await knex('comments').truncate()
  await knex('likes').truncate()
  await knex('retweets').truncate()
  await knex('favorites').truncate()
  await knex('followings').truncate()
  await knex('followers').truncate()

  await knex('account_types').insert([
    {account_type_name:"public"},
    {account_type_name:"private"}
  ]);
  await knex('roles').insert([
    {role_name:"admin"},
    {role_name:"user"}
  ]);
  await knex('users').insert([
    {username: 'onur' ,password:"$2b$10$nm/zCjiFeGNgcwa95Wu6RegjkqfJ67lJ/H6Op0eWFzmelkOa043bi",mail:"onur@onur.com",role_id:1,account_type_id:1},
    {username: 'onur2' ,password:"$2b$10$nm/zCjiFeGNgcwa95Wu6RegjkqfJ67lJ/H6Op0eWFzmelkOa043bi",mail:"onur2@onur.com",role_id:2,account_type_id:2},
    {username: 'onur3' ,password:"$2b$10$nm/zCjiFeGNgcwa95Wu6RegjkqfJ67lJ/H6Op0eWFzmelkOa043bi",mail:"onur3@onur.com",role_id:2,account_type_id:1},
    {username: 'onur4' ,password:"$2b$10$nm/zCjiFeGNgcwa95Wu6RegjkqfJ67lJ/H6Op0eWFzmelkOa043bi",mail:"onur4@onur.com",role_id:2,account_type_id:1},
  ]);
  await knex('tweets').insert([
    {tweet: 'tweet1',user_id:1},
    {tweet: 'tweet2',user_id:1},
    {tweet: 'tweet3',user_id:2},
    {tweet: 'tweet4',user_id:1},
  ]);
  await knex('comments').insert([
    {comment: 'yorum1',tweet_id:1,user_id:1},
    {comment: 'yorum2',tweet_id:2,user_id:1},
    {comment: 'yorum3',tweet_id:1,user_id:2},
    {comment: 'yorum4',tweet_id:4,user_id:1},
    {comment: 'yorum5',tweet_id:1,user_id:1},
    {comment: 'yorum6',tweet_id:2,user_id:2},
    {comment: 'yorum7',tweet_id:3,user_id:1},
  ]);
  await knex('likes').insert([
    {user_id: 1,tweet_id:1},
    {user_id: 1,tweet_id:2},
    {user_id: 2,tweet_id:1},
  ]);
  await knex('retweets').insert([
    {user_id: 1,tweet_id:2},
    {user_id: 1,tweet_id:4},
    {user_id: 2,tweet_id:1},
  ]);
  await knex('favorites').insert([
    {user_id: 2,tweet_id:3},
    {user_id: 1,tweet_id:2},
    {user_id: 2,tweet_id:4},
  ]);
  await knex('followings').insert([
    {user_id: 1,following_user_id:2},
    {user_id: 1,following_user_id:3},
    {user_id: 2,following_user_id:3},
  ]);
  await knex('followers').insert([
    {user_id: 2,follower_user_id:1},
    {user_id: 3,follower_user_id:1},
    {user_id: 3,follower_user_id:2},
  ]);
};
