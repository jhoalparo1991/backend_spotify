
const { IncomingWebhook } = require('@slack/webhook');

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
const webHook = new IncomingWebhook(SLACK_WEBHOOK_URL);

const loggerStream = {
    write: message => {
        webHook.send({text:message})
    },
  };


  module.exports = loggerStream;