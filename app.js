const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const phoneNumber = process.env.ACCOUNT_NUMBER;
const client = require('twilio')(accountSid, authToken);

// send SMS from twilio

app.get('/send_message', function(req, res) {
    client.messages.create({
        body: 'This is test SMS from twilio. your OTP is 06987462',
        from: phoneNumber,
        to: xxxxxxxxxx   // this is sender number

    }).then(messages => res.send('message sent successfully and message id is ' + messages.sid));
})

// send SMS from twilio with input params

app.get('/send_message1/:phone_number', function(req, res) {
    const number = req.params.phone_number;
    console.log(number)
    client.messages.create({
        body: 'This is test SMS from twilio. your OTP is 06987462',
        from: phoneNumber,
        to: number
    }).then(messages => messages => res.send('message sent successfully and message id is ' + messages.sid))
})

// define port

app.listen(3001, ()=> console.log('port is running at 3001'))