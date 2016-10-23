'use strict';

const Rental = use('App/Model/Rental');
const attributes = ['title', 'owner', 'city', 'type', 'image', 'bedrooms', 'description'];

class RentalController {

  * index(request, response) {
    const rentals = yield Rental.with().fetch();

    response.jsonApi('Rental', rentals);
  }

  * store(request, response) {
    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };
    const rental = yield Rental.create(Object.assign({}, input, foreignKeys));

    response.jsonApi('Rental', rental);
  }

  * show(request, response) {
    const id = request.param('id');
    const rental = yield Rental.with().where({ id }).firstOrFail();

    response.jsonApi('Rental', rental);
  }

  * update(request, response) {
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };

    const rental = yield Rental.with().where({ id }).firstOrFail();
    yield rental.update(Object.assign({}, input, foreignKeys));

    response.jsonApi('Rental', rental);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const rental = yield Rental.query().where({ id }).firstOrFail();
    yield rental.delete();

    response.status(204).send();
  }

}

module.exports = RentalController;
