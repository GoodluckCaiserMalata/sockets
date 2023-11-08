const axios = require('axios');

function getToken() {
  return new Promise((resolve, reject) => {
    var data = JSON.stringify({
      "username": "BTiYN8foAeYwbeG8y4DNt5BbqCCzij4i",
      "password": "LgHPJzWMBUABfGQeJMXCLdM97iyfqfMJ"
    });

    var config = {
      method: 'post',
      url: 'https://192.168.1.150:8088/openapi/v1.0/get_token',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        let accessToken = response.data.access_token;
        let expiryTime = response.data.access_token_expire_time;
        console.log(accessToken);
        resolve({ accessToken, expiryTime });
      })
      .catch(function (error) {
        reject(error);
        console.log(error.message);
      });
  });
}

module.exports = { getToken };

// Call the function if needed
getToken().then(result => {
  console.log('Access Token:', result.accessToken);
  console.log('Expiry Time:', result.expiryTime);
});
