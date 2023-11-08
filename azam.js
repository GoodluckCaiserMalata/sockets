// module.exports.lookUp = async (smartCardNumber) =>{
//   const generatedRequestId = await generateReferenceId();
//   const generatedCheckSum = await generateChecksum();
//   const data = JSON.stringify({
//     "version": 1,
//     "method": "name_lookup",
//     "data": {
//       "customerReferenceNumber": smartCardNumber,
//       "bankCode": `${process.env.AZAM_BANK_CODE}`,
//       "requestId": `${generatedRequestId}`,
//       "serviceType": `${process.env.AZAM_SERVICE_TYPE}`
//     },
//     "checksum": `${generatedCheckSum}`
//   });
//   const config = {
//     method: 'post',
//     url: `${process.env.AZAM_PAY_LOOKUP_URL}`,
//     headers: { 
//       'Content-Type': 'application/json', 
//     },
//     data : data
//   }

//   axios(config).then((response) => {
//     console.log(response.data);
//   }).catch((error) =>{
//     console.log(error);
//   })
// }