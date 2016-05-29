/**
 * Creates a new Exotel client.
 * @param {string} sid The Sid of the Exotel account.
 * @param {string} token The API token of the Exotel account.
 * @constructor
 */
var ExotelClient_ = function(sid, token) {
  this.sid_ = sid;
  this.token_ = token;
  this.projectKey_ = eval('Script' + 'App').getProjectKey();
  this.baseUrl_ = "https://twilix.exotel.in/v1/Accounts/" + sid;

  this.baseHttpOptions_ = {
    "muteHttpExceptions": true,
    "headers": {
      "Authorization": "Basic " + Utilities.base64Encode(sid + ":" + token)
    }
  }
}

ExotelClient_.prototype.connectToFlow = function(to, flowId, exophone, timeLimit, timeOut, callbackUrl) {
  var endpoint = this.baseUrl_ + "/Calls/connect.json";
  var options = this.baseHttpOptions_;
  options.method = "post";
  options.payload = {
    "From": to,
    "Url": "http://my.exotel.in/exoml/start/" + flowId,
    "CallerId": exophone,
    "TimeLimit": timeLimit,
    "TimeOut": timeOut,
    "StatusCallback": callbackUrl,
    "CallType": "trans"
  };

  var response = UrlFetchApp.fetch(endpoint, options);
  return JSON.parse(response.getContentText());
};

ExotelClient_.prototype.connectToAgent = function(to, agentNum, exophone, timeLimit, timeOut, callbackUrl) {
  var endpoint = this.baseUrl_ + "/Calls/connect.json";
  var options = this.baseHttpOptions_;
  options.method = "post";
  options.payload = {
    "From": to,
    "To": agentNum,
    "CallerId": exophone,
    "TimeLimit": timeLimit,
    "TimeOut": timeOut,
    "StatusCallback": callbackUrl,
    "CallType": "trans"
  };

  var response = UrlFetchApp.fetch(endpoint, options);
  return JSON.parse(response.getContentText());
};

ExotelClient_.prototype.sendSms = function(to, body, exophone, priority, encodingType, callbackUrl) {
  var endpoint = this.baseUrl_ + "/Sms/send.json";
  var options = this.baseHttpOptions_;
  options.method = "post";
  options.payload = {
    "To": to,
    "Body": body,
    "From": exophone,
    "Priority": priority,
    "EncodingType": encodingType,
    "StatusCallback": callbackUrl
  };

  var response = UrlFetchApp.fetch(endpoint, options);
  return JSON.parse(response.getContentText());
};

ExotelClient_.prototype.getCallDetails = function(callSid) {
  var endpoint = this.baseUrl_ + "/Calls/" + callSid + ".json";
  var options = this.baseHttpOptions_;
  options.method = "get";

  var response = UrlFetchApp.fetch(endpoint, options);
  return JSON.parse(response.getContentText());
};

ExotelClient_.prototype.getSmsDetails = function(smsSid) {
  var endpoint = this.baseUrl_ + "/Sms/Messages/" + callSid + ".json";
  var options = this.baseHttpOptions_;
  options.method = "get";

  var response = UrlFetchApp.fetch(endpoint, options);
  return JSON.parse(response.getContentText());
};