const WebSocket = require("ws");
const dataToMoja = require("./roughWork");
const send = require('./Mariya');


function monitorEvents(accessToken) {

http://192.168.2.150:8088/ 
  const ws = new WebSocket(`wss://rwembxgt.zacm.yeastarcloud.com/openapi/v1.0/subscribe?access_token=${accessToken}`);
  ws.on("open", function open() {
    console.log("WebSocket connection established");

    // Send the access token in the initial connection message
    ws.send(JSON.stringify({
      access_token: accessToken
    }));


    ws.send(JSON.stringify({
      topic_list: [30022, 30007, 30011, 30015, 30016]
    }));
  });

  ws.on("message", function incoming(message) {
    // checking for call events
    console.log(JSON.parse(message));
    data = JSON.parse(message);
    if (data.type === 30011) {
      console.log();
      // dataToMoja.dataToMoja(data);
    }
  });

  ws.on("close", function close() {
    console.log("WebSocket connection closed");
  });
}

module.exports = { monitorEvents }; 
