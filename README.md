# Exotel for Apps Script

Exotel for Apps Script provides a simple library to utilize [Exotel](http://exotel.in)'s APIs in Google App Scripts.

## Setup

1. Add the `Exotel.gs` file in the `dist/` folder to your Google Apps Script project as a new file.
2. Add the Underscore.js library to your project using the project key: `MGwgKN2Th03tJ5OdmlzB8KPxhMjh3Sh48`.

## Usage

### Instantiating the client

Use the exposed `create()` function to instantiate a client object, passing in your Exotel Sid and token.

```javascript
    var sid = '...';
    var token = '...';

    var exotel = Exotel.create(sid, token);
```

### Making calls

Use the Exotel client object's `connectToAgent()` and `connectToFlow()` functions to connect two numbers via telephone call or to connect a number to an Exotel flow/app.

```javascript
    var call = exotel.connectToAgent(
                        "123", // Number to dial out to
                        "456", // Number to dial to first, after which the first number is called
                        "8088919888", // Your Exophone which will be used to place the call
                        5 * 60, // (Optional) Time limit for the call (in seconds)
                        30, // (Optional) Time out for picking up the call (in seconds)
                        "http://myserver.com/exotelcallbackendpoint" // (Optional) Endpoint to which a POST request will be made after the call ends
    );

    if (call) {
        Logger.log("Response is: " + call);
    } else {
        Logger.log("Unable to make call. :(");
    }
```

```javascript
    var call = exotel.connectToFlow(
        "123", // Number to dial out to
        "987542", // The ID of the flow to connect the callee to
        "8088919888", // Your Exophone which will be used to place the call
        5 * 60, // (Optional) Time limit for the call (in seconds)
        30, // (Optional) Time out for picking up the call (in seconds)
        "http://myserver.com/exotelcallbackendpoint" // (Optional) Endpoint to which a POST request will be made after the call ends
    );

    if (call) {
        Logger.log("Response is: " + call);
    } else {
        Logger.log("Unable to make call. :(");
    }
```

### Sending an SMS

Use the `sendSms()` function in the Exotel client to send an SMS to a number using your Exophone.

```javascript
    var sms = exotel.sendSms(
        "123", // The number to which the SMS is to be sent
        "Hello World!", // The body of the SMS to be sent
        "8088919888", // The SMS sender ID/Exophone using which your SMS will be sent
        Exotel.SMS_PRIORITY.HIGH, // (optional) Specifies the priority of the SMS; can be SMS_PRIORITY.HIGH or SMS_PRIORITY.NORMAL
        Exotel.SMS_ENCODING.PLAIN // (optional) Indicates whether the SMS is Unicode or not; can SMS_ENCODING.PLAIN or SMS_ENCODING.UNICODE
        "http://myserver.com/exotelcallbackendpoint" // (Optional) Endpoint to which a POST request will be made after the SMS reaches a terminal state
    );

    if (sms) {
        Logger.log("Response is: " + sms);
    } else {
        Logger.log("Unable to send SMS. :(");
    }
```

## References

For more information about Exotel's APIs, you can visit the following pages:

- [Exotel's Support Pages](http://support.exotel.in/)
- [Unofficial Exotel Apiary Docs](https://docs.exotelapi.apiary.io/)