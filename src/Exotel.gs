// Load the Underscore.js library. This library was added using the project
// key "MGwgKN2Th03tJ5OdmlzB8KPxhMjh3Sh48".
var _ = Underscore.load();

/**
 * Maximum number of retries for calls.
 * @const
 */
var MAX_CALL_RETRIES_ = 1;

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

/**
 * Creates a new Exotel client.
 * @param {string} sid The Sid of your Exotel account.
 * @param {string} token The API token for your Exotel account.
 * @return {ExotelClient_} The Exotel client object.
 */
function create(sid, token) {
  return new ExotelClient_(sid, token);
}
