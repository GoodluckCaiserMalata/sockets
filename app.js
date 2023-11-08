const monitorEvents = require('./webSocket.js');
const getToken = require("./getAccessToken");

let isFirstCall = true;

if (isFirstCall) {
  getToken.getToken().then((data) => {
    console.log(data.accessToken, data.expiryTime);
    isFirstCall = false;
    setInterval(() => {
      getToken.getToken().then((data) => {
        console.log(data.accessToken, data.expiryTime);
        monitorEvents.monitorEvents(data.accessToken);
      }).catch((error) => {
        console.error(error);
      });
    }, data.expiryTime * 60 * 1000);
    monitorEvents.monitorEvents(data.accessToken);
  }).catch((error) => {
    console.error(error);
  });
} else {
  setInterval(() => {
    getToken.getToken().then((data) => {
      console.log(data.accessToken, data.expiryTime);
      monitorEvents(data.accessToken);
    }).catch((error) => {
      console.error(error);
    });
  }, tokenData.expiryTime * 60 * 1000);
}
