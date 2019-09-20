
exports.seed = function(knex) {
  
  // Inserts seed entries
  return knex('vacations').insert([
    {destination: 'Paradise', date: 'May, 10, 2015', description: 'wonderful', cost: 50, user_id: 2},
    
  ]);

};
