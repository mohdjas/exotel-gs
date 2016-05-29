/**
 * Creates a new Exotel client with the name specified.
 * @param {string} sid The Sid of your Exotel account.
 * @param {string} token The API token for your Exotel account.
 * @return {ExotelClient_} The Exotel client object.
 */
function create(sid, token) {
  return new ExotelClient_(sid, token);
}

/**
 * The supported SMS encoding types.
 * @enum {string}
 * @const
 */
var SMS_ENCODING = {
  PLAIN: 'plain',
  UNICODE: 'unicode'
};

/**
 * The supported SMS priorities.
 * @enum {string}
 * @const
 */
var SMS_PRIORITY = {
  NORMAL: 'normal',
  HIGH: 'high'
};