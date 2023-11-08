// File name : CheckoutEncryptionTest.js

let checkoutEncrypt = require('@cellulant/checkout_encryption');

const accessKey = "$2a$08$Y5iHoxfJkjjyxaPCicK2cehYHhs62dKXO6gFpgqKD.YGX7BOveQmu"
const IVKey = "jBghnLvDr6JFVZwd";
const secretKey = "xqjBhX6yfYdWc4KF";
const algorithm = "aes-256-cbc";

// sample payload object 
var payloadObj = {
    "msisdn":"+254700000000",
    "account_number":"oid39",
    "country_code":"KEN",
    "currency_code":"KES",
    "customer_email":"johndoe@mail.com",
    "customer_first_name":"John",
    "customer_last_name":"Doe",
    "due_date":"2023-03-29 16:15:30",
    "fail_redirect_url":"https://engage.beem.africa",
    "merchant_transaction_id":"txn_id_342",
    "payment_option_code":"",
    "callback_url":"https://engage.beem.africa",
    "pending_redirect_url":"https://engage.beem.africa",
    "request_amount":"100",
    "request_description":"Dummy merchant transaction",
    "success_redirect_url":"https://engage.beem.africa",
    "invoice_number":"",
    "language_code":"en",
    "is_offline":"true",
    "service_code":"MOJDEV3288",
    "access_key":"$2a$08$Y5iHoxfJkjjyxaPCicK2cehYHhs62dKXO6gFpgqKD.YGX7BOveQmu",
    "iv_key":"jBghnLvDr6JFVZwd",
    "secret_key":"xqjBhX6yfYdWc4KF"
 };

	const payloadStr = JSON.stringify(payloadObj);
 
  // Create object of the Encryption class  
  let encryption = new checkoutEncrypt.Encryption(IVKey, secretKey, algorithm);

 // call encrypt method
 var result = encryption.encrypt(payloadStr);

 // print the result
 console.log(result);