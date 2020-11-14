const knex = require('../database/connection');

exports.all = () => {
  return knex
        .select('*')
        .from('urls')
}

exports.create = (url) => {
  return knex('urls')
    .insert({ longUrl: url.longUrl, shortUrl: url.shortUrl, redirectCount:0});
}

exports.last = () => {
  return knex
    .select('*')
    .from('urls')
    .orderBy('id','desc')
    .limit(1)
}

exports.find = (shortUrl) => {
  return knex
    .select('*')
    .from('urls')
    .where('shortUrl', shortUrl)
    .first();
}


exports.clickUpdate = (shortUrl, count) => {
  return knex
      .select('*')
      .from('urls')
      .where('shortUrl', shortUrl)
      .update('redirectCount', count )
}



// exports.done = (id) => {
//   return knex
//       .select('*')
//       .from('tasks')
//       .where('id', id)
//       .first()
//       .update({
//           status: 'done',
//       }).then(() => {
//           return knex.select('*')
//               .from('tasks')
//               .where('id', id)
//               .first()

//       })
// }

// exports.delete = (id) => {
//   return knex
//       .select('*')
//       .from('tasks')
//       .where('id', id)
//       .first().del()
// }