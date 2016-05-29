/**
 * @fileoverview Contains the methods exposed by the library, and performs
 * any required setup.
 */

// Load the Underscore.js library. This library was added using the project
// key "MGwgKN2Th03tJ5OdmlzB8KPxhMjh3Sh48".
var _ = Underscore.load();

/**
 * Creates a new Exotel client with the name specified.
 * @param {string} sid The Sid of your Exotel account.
 * @param {string} token The API token for your Exotel account.
 * @return {Exotel_} The Exotel client object.
 */
function create(sid, token) {
  return new ExotelClient_(sid, token);
}

if (module) {
  module.exports = {
    createClient: create
  };
}
