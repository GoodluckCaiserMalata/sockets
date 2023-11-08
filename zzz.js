const axios = require("axios");
const https = require("https");
var btoa = require("btoa");

const api_key = "888c329d06246913";
const secret_key = "ZTM5MzMwZGU1ZDUxYzRiYzZiZDY5MWE3ZGYxYTNjYTBlMGIyZDFjZjQ5MjM5ZWNmZWNkNjlhZDVlN2ZiZGE5OQ";
const content_type = "application/json";
const source_addr ="INFO";

function send_sms() {
  axios
    .post(
      "https://apisms.beem.africa/v1/send",
      {
        source_addr: source_addr,
        schedule_time: "",
        encoding: 0,
        message: "Hello World",
        recipients: [
          {
            recipient_id: 1,
            dest_addr: "255717663663",
          },
          {
            recipient_id: 2,
            dest_addr: "255700000002",
          },
        ],
      },
      {
        headers: {
          "Content-Type": content_type,
          Authorization: "Basic " + btoa(api_key + ":" + secret_key),
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      }
    )
    .then((response) => console.log(response, api_key + ":" + secret_key))
    .catch((error) => console.error(error.response.data));
}

send_sms();