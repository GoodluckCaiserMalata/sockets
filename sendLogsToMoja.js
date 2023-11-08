const axios = require('axios');

function sendEventData(eventData) {
  var data = '';

  var config = {
    method: 'post',
    url: 'http://localhost:3002/v1/chat',
    headers: {
      // 'Authorization': '5c3e5ea285ae28c3cf58e1e0f7d6a901'
    },
    data: eventData
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

module.exports = { sendEventData };


