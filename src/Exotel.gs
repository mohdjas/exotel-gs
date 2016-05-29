/**
 * @fileoverview Contains the methods exposed by the library, and performs
 * any required setup.
 */

/**
 * Creates a new Exotel client with the name specified.
 * @param {string} sid The Sid of your Exotel account.
 * @param {string} token The API token for your Exotel account.
 * @return {ExotelClient_} The Exotel client object.
 */
function create(sid, token) {
  return new ExotelClient_(sid, token);
}

if (module) {
  module.exports = {
    createClient: create
  };
}
