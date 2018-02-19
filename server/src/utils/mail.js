import mailgunloader from "mailgun-js";

let mailgun = mailgunloader({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: "sandboxeeec0aa01151446abb0ae7fdba784007.mailgun.org"
});

function sendEmail(to, from, subject, content) {
  let data = {
    from,
    to,
    subject,
    html: content
  };
  return mailgun.messages().send(data);
}

export { sendEmail };
