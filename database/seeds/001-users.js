exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'HelloKitty', password: 'PinkBow', department: "Bows" },
        { username: 'CocoCat', password: 'Black', department: "Cocolate" },

      ]);
    });
};
