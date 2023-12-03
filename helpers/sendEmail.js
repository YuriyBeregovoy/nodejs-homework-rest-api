const ElasticEmail = require('@elasticemail/elasticemail-client');
require("dotenv/config");

const { ELASTIC_API_KEY, EMAIL_FROM } = process.env;

const defaultClient = ElasticEmail.ApiClient.instance;

const { apikey } = defaultClient.authentications;
apikey.apiKey = ELASTIC_API_KEY;

const api = new ElasticEmail.EmailsApi();

const email = new ElasticEmail.EmailMessageData({
  Recipients: [
    new ElasticEmail.EmailRecipient("jellicocaptain@gmail.com")
  ],
  Content: {
    Body: [
      new ElasticEmail.BodyPart({
        ContentType: "HTML",
        Content: "<strong>Test email</strong>"
      })
    ],
    Subject: "Test email",
    From: EMAIL_FROM
  }
});

const callback = function (error, data, response) {
  if (error) {
    console.error(error.message);
  } else {
    console.log('API called successfully.');
  }
};

api.emailsPost(email, callback);
