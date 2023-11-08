var axios = require('axios');


function handleInboundCall(channel_id){
    var data = JSON.stringify({
        "channel_id": "PJSIP/1002-00000006"
      });
      
      var config = {
        method: 'post',
        url: 'https://rwembxgt.zacm.yeastarcloud.com/openapi/v1.0/call/accept_inbound?access_token=yXopCLDzogT7TUlnbhAQbqdHNjU9EM8v',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
}


