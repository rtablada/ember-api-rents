const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Rental extends JsonApiView {
  get attributes() {
    return ['title', 'owner', 'city', 'type', 'image', 'bedrooms', 'description'];
  }

}

module.exports = Rental;
