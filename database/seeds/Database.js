'use strict';

/*
|--------------------------------------------------------------------------
| Database Seeder
|--------------------------------------------------------------------------
| Database Seeder can be used to seed dummy data to your application
| database. Here you can make use of Factories to create records.
|
| make use of Ace to generate a new seed
|   ./ace make:seed [name]
|
*/

const DB = use('Database');
const Factory = use('Factory');

let rentals = [
  {
    type: 'rentals',
    id: 'grand-old-mansion',
    attributes: {
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      type: 'Estate',
      bedrooms: 15,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
    },
  },
  {
    type: 'rentals',
    id: 'urban-living',
    attributes: {
      title: 'Urban Living',
      owner: 'Mike Teavee',
      city: 'Seattle',
      type: 'Condo',
      bedrooms: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
      description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.',
    },
  },
  {
    type: 'rentals',
    id: 'downtown-charm',
    attributes: {
      title: 'Downtown Charm',
      owner: 'Violet Beauregarde',
      city: 'Portland',
      type: 'Apartment',
      bedrooms: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
      description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.',
    },
  },
];

class DatabaseSeeder {

  * run() {
    // run model/database factories here
    yield DB.table('rentals').insert(rentals.map(r => r.attributes));
  }

}

module.exports = DatabaseSeeder;
