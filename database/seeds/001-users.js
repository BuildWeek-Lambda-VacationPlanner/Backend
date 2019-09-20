
exports.seed = function(knex) {
  
      // Inserts seed entries
      return knex('users').insert([
        {username: 'jamison', password: 'blackwell'},
        {username: 'john', password: 'doe'},
        {username: 'jane', password: 'doe'},
      ]);
    
};
