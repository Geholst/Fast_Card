// Configuration gets passed to OpenAIApi constructor
// and dotenv to use the process variable
const { Configuration, OpenAIApi } = require("openai");

// custom class to clean openai response
const { Clean } = require("./util");

require("dotenv").config();
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = openai;
