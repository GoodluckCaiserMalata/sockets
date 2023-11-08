var axios = require('axios');
var data = JSON.stringify({
  "accountNumber": "+255742282434",
  "amount": "500",
  "currency": "TZS",
  "externalId": "12333666",
  "provider": "Mpesa"
});

var config = {
  method: 'post',
  url: 'https://sandbox.azampay.co.tz/azampay/mno/checkout',
  headers: { 
    'Authorization': 'Bearer U2FsdGVkX18gCX8sF/WjXJLlwm1IB85i0beSegGvf7gjExkgJWSWQEuPA+lBoSSHd5iTzroNrG9/dgislHIzC6K/S1RbhK4fzR7NTktmSw+1Z/+kUl8sGjmGQtb5vq2A85bySKdmP+l635T6xwTcPrfNdp7L6wq4yAekyZ4CETY866LIgxURUxTc88ZFgwUHO2Dbugc47NnPGoiLhsQXB7KVYdLzfNMbUeo08KIxkhgv1FJT+RgID0gvL/wu+vveAH8KY8F3UGwpv7+nPbMBNqZHJ5UFBqB6B7KsRx/vZ6U+CsF71Tk/KkmVsvpDf41uRx8QFRo01I994eRVdX4ggs3tl2CxJJES+T3W0mRYgYEQuyguvDeFEGPIZBrbDollaQH+OJcsadXu0gPppOGh09o5JFJAXuTde8L+2BCdgCX7C0BCnNSa7rf0GfGIxcaT2iMC6XELbSuQFAC8lj44BJWCpImgJ/fmYBZ+qpNQC7pfOsmq0eSrmGTB9GdaLln/knrLIo20GDQQNSSfWT7aTHzGV3bZQJXvszyYuwGc1sT1lUU/wjyJblPAcSxAvR4c1+i8+2/azX5cXc2AeEhGnfn2H71ddWEwgkg7KWs0mzT8BgXz3GY6J74lYIrQTnvP4sDqaJbUPuT6bO9ftlLVK6KHeRP2B0bBz3uxPRfav8H0atc8uj2Onsw7ywgr9HFXBv0qjCCyD+oFAB32HgBaK3feSUxciLb7JbrmdXXX2CJmdGpZrYO1gX0bf7HtksHSTeonMgi/jIacp5mhEX4ETm5OrEptK6KfIwiQBjgGJ7mE0DKtdEASjFDNtVd1pCztzxu5sbwb3lafQwTu3OBFm0dn9xbEyVrJ80TabHKEh5AAeBvubmd7g6K4KQ+bPoloyPN1Ac8rE9xYjv6csFMf+OkA+lP/Y6+C6y1E+rtj2xS9T/K+Uty78SlCPTmqD1dsjyLtYSGg3tsqe6sx10yOtHD7Ztweq2RmN11C3Q8eiiLXx/93u6ML4Xox7Y4vKv5lorkSFnBPymx9zrdxixUpAg==', 
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
