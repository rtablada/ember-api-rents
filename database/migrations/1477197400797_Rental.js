'use strict';

const Schema = use('Schema');

class RentalSchema extends Schema {

  up() {
    this.create('rentals', (table) => {
      table.increments();
      table.string('title');
      table.string('owner');
      table.string('city');
      table.string('type');
      table.string('image');
      table.integer('bedrooms');
      table.string('description');
      table.timestamps();
    });
  }

  down() {
    this.drop('rentals');
  }

}

module.exports = RentalSchema;
