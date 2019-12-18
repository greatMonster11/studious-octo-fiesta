---
path: "/blog/send-email"
date: "2019-05-04"
title: "How to Send Email with SendGrid in Node.js Apps"
tags: ["array"]
---

SendGrid is a great service made by Twilio for sending emails. Rather than setting up your own email server for sending email with your apps, we use SendGrid to do the hard work for us. It also decrease the chance of email ending up in spam since it is a known trustworthy service.
It also has very easy to use libraries for various platforms for sending emails. Node.js is one of the platforms that are supported.
To send emails with SendGrid, install the SendGrid SDK package by running `npm i @sendgrid/mail` . Then in your code, add `const sgMail = require(‘@sendgrid/mail’);` to import the installed package.
Then in your code, you send email by:

```
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: email,
  from: 'email@example.com',
  subject: 'Example Email',
  text: `
    Dear user,  Here is your email.`,
  html: `
    <p>Dear user,</p></pre>
        Here is your email.</p>`,
};
sgMail.send(msg);
```

where `process.env.SENDGRID_API_KEY` is the SendGrid’s API, which should be stored as an environment variable since it is a secret.
Testing is easy since you don’t need to set up a local development email server.
Sending email is this simple and easy with SendGrid API. It is also free if you send small amounts of email, which is a great benefit.
![](https://cdn-images-1.medium.com/max/800/1*EdbfsnL3ABxWj2iVWmoIWA.png)
