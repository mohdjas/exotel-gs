/**
 * Creates a new Exotel client.
 * @param {string} sid The Sid of the Exotel account.
 * @param {string} token The API token of the Exotel account.
 * @constructor
 */
var ExotelClient_ = function(sid, token) {
  validate_({
    'sid': sid,
    'token': token
  });

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

/*
 * Connects your customer to the flow created in the Exotel dashboard.
 * @param {string} to The telephone number to dial.
 * @param {number} flowId The ID of the flow to connect the number to.
 * @param {string} exophone The Exophone that will be used to call the number.
 * @param {string} customField App-specific value to be passed along with a GET request from your flow.
 * @param {number} timeLimit The time limit of the call in seconds.
 * @param {number} timeOut The number of seconds to wait before call is picked up.
 * @param {string} callbackUrl The URL on which a callback is to be made after the call is finished.
 * @return {Object} JSON object of the response from Exotel.
 */
ExotelClient_.prototype.connectToFlow = function(to, flowId, exophone, customField, timeLimit, timeOut, callbackUrl) {
  validate_({
    'to': to,
    'flowId': flowId,
    'exophone': exophone
  });

  var params = {
    "From": to,
    "Url": "http://my.exotel.in/exoml/start/" + flowId,
    "CallerId": exophone,
    "CallType": "trans"
  };
  if (!isEmpty_(customField)) {
    params.CustomField = customField;
  }
  if (!isEmpty_(timeLimit)) {
    params.TimeLimit = timeLimit;
  }
  if (!isEmpty_(timeOut)) {
    params.TimeOut = timeOut;
  }
  if (!isEmpty_(callbackUrl)) {
    params.StatusCallback = callbackUrl;
  }

  return this.makeCall_(params);
};

/*
 * Connects your customer to an agent specified.
 * @param {string} to The telephone number to dial.
 * @param {string} agentNum The telephone number of the agent to connect to.
 * @param {string} exophone The Exophone that will be used to call the number.
 * @param {number} timeLimit The time limit of the call in seconds.
 * @param {number} timeOut The number of seconds to wait before call is picked up.
 * @param {string} callbackUrl The URL on which a callback is to be made after the call is finished.
 * @return {Object} JSON object of the response from Exotel.
 */
ExotelClient_.prototype.connectToAgent = function(to, agentNum, exophone, timeLimit, timeOut, callbackUrl) {
  validate_({
    'to': to,
    'agentNum': agentNum,
    'exophone': exophone
  });

  var params = {
    "From": to,
    "To": agentNum,
    "CallerId": exophone,
    "CallType": "trans"
  };
  if (!isEmpty_(timeLimit)) {
    params.TimeLimit = timeLimit;
  }
  if (!isEmpty_(timeOut)) {
    params.TimeOut = timeOut;
  }
  if (!isEmpty_(callbackUrl)) {
    params.StatusCallback = callbackUrl;
  }

  return this.makeCall_(params);
};

/*
 * Connects your customer to an agent specified.
 * @param {Object.<string, string>} params POST parameters to be passed.
 * @return {Object} JSON object of the response from Exotel.
 * @private
 */
ExotelClient_.prototype.makeCall_ = function(params) {
  var endpoint = this.baseUrl_ + "/Calls/connect.json";
  var options = this.baseHttpOptions_;
  options.method = "post";

  options.payload = params;

  var response = UrlFetchApp.fetch(endpoint, options);
  return JSON.parse(response.getContentText());
}

/*
 * Sends an SMS to the  to an agent specified.
 * @param {string} to The telephone number to which the SMS is to be sent.
 * @param {string} body The body of the message.
 * @param {string} exophone The Exophone/sender ID that will be used to send the SMS.
 * @param {number} priority Specifies the priority of the SMS to be sent.
 * @param {number} encodingType Specifies if the body is of type 'plain' or 'unicode'.
 * @param {string} callbackUrl The URL on which a callback is to be made after the call is finished.
 * @return {Object} JSON object of the response from Exotel.
 */
ExotelClient_.prototype.sendSms = function(to, body, exophone, priority, encodingType, callbackUrl) {
  validate_({
    'to': to,
    'body': flowId,
    'exophone': exophone
  });

  var endpoint = this.baseUrl_ + "/Sms/send.json";
  var options = this.baseHttpOptions_;
  options.method = "post";
  options.payload = {
    "To": to,
    "Body": body,
    "From": exophone
  };
  if (!isEmpty_(priority)) {
    options.payload.Priority = priority;
  }
  if (!isEmpty_(encodingType)) {
    options.payload.EncodingType = encodingType;
  }
  if (!isEmpty_(callbackUrl)) {
    options.payload.StatusCallback = callbackUrl;
  }

  var response = UrlFetchApp.fetch(endpoint, options);
  return JSON.parse(response.getContentText());
};

/*
 * Sends an SMS to the  to an agent specified.
 * @param {string} callSid The Sid of the call whose details are to be fetched.
 * @return {Object} JSON object of the response from Exotel.
 */
ExotelClient_.prototype.getCallDetails = function(callSid) {
  validate_({
    'callSid': callSid
  });

  var endpoint = this.baseUrl_ + "/Calls/" + callSid + ".json";
  var options = this.baseHttpOptions_;
  options.method = "get";

  var response = UrlFetchApp.fetch(endpoint, options);
  return JSON.parse(response.getContentText());
};

/*
 * Sends an SMS to the  to an agent specified.
 * @param {string} smsSid The Sid of the SMS whose details are to be fetched.
 * @return {Object} JSON object of the response from Exotel.
 */
ExotelClient_.prototype.getSmsDetails = function(smsSid) {
  validate_({
    'callSid': callSid
  });

  var endpoint = this.baseUrl_ + "/Sms/Messages/" + callSid + ".json";
  var options = this.baseHttpOptions_;
  options.method = "get";

  var response = UrlFetchApp.fetch(endpoint, options);
  return JSON.parse(response.getContentText());
};