const express = require('express')
const app = express()
const port = 3000
var nodemailer = require('nodemailer');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'm.anas.the360tech@gmail.com',
      pass: 'gugoqdbonfvpvesy'
    }
  });

  var mailOptions = {
    from: 'm.anas.the360tech@gmail.com',
    to: 'm.anaslatif.com@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send('error')
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Ok')
    }
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
