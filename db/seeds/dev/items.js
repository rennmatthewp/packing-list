exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('items')
        .insert([
          { name: 'skateboard', packed: false },
          { name: 'shoes', packed: false },
          { name: 'pants', packed: false }
        ])
        .then(() => console.log('seeding complete'))
        .catch(error => console.log('Error seeding data: ', error));
    })
    .catch(error => console.log('Error seeding data: ', error));
};
