
exports.up = function(knex) {
    return knex.schema
    .createTable('users', tbl => {
        tbl.increments();
        tbl.string('username', 255)
          .notNullable()
          .unique();
        tbl.string('password', 255)
        .notNullable();
      })

   .createTable('vacations', tbl => {
        tbl.increments();
        tbl.string('destination', 125)
        .notNullable()
        tbl.string('date', 125)
        .notNullable()
        tbl.string('description', 255)
        .notNullable()
        tbl.float('cost')
        tbl.string('comments', 255)
        tbl.timestamps(true, true)
        // foreign key is linked to id on users table
        tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id').inTable('users')

   })
  
};


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('vacations')
    .dropTableIfExists('users');

};
