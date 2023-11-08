const getToken = require("./getAccessToken");
const axios = require('axios');

function getCDRList() {
    getToken.getToken().then((data) => {
        console.log(data.accessToken);
    })
    var config = {
        method: 'get',
        url: 'https://rwembxgt.zacm.yeastarcloud.com/openapi/v1.0/cdr/list?access_token=damJi4foxdmskbfjS8cnB9UoVMF71Q0a',
        headers: {}
    };

    axios(config)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

getCDRList();
module.export = { getCDRList }
