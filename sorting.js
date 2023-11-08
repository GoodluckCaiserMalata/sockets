const axios = require('axios');

// Create an array of phone numbers to be sent consecutively
const arrayOfNumbers = ["2557557162425", "2557557049255", "2557557878552"];

// Array of messages to be sent consecutively
const messages = ["Hi", "6"];

// Initialize an index to keep track of the current phone number
let currentPhoneNumberIndex = 0;

// Initialize an index to keep track of the current message to send
let currentMessageIndex = 0;

// Function to send a request with a specific phone number and message
function sendRequest() {
  const randomName = `User${currentPhoneNumberIndex}`;
  const randomPhoneNumber = arrayOfNumbers[currentPhoneNumberIndex];
  const currentMessage = messages[currentMessageIndex];

  const apiKey = '8185daaee64d5a57dabcb961d5533d9c';
  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json', // You can specify the content type as needed
  };
  const data = {
    app: "BeemTest",
    timestamp: Date.now(),
    version: 2,
    type: "message",
    payload: {
      id: "ABEGJVaCQwSAAhCt33VV1Zivq9-48AP8bs_t",
      source: randomPhoneNumber,
      type: "text",
      payload: {
        text: currentMessage
      },
      sender: {
        phone: randomPhoneNumber,
        name: randomName,
        country_code: "255",
        dial_code: "677000000"
      }
    }
  };

  axios.post('http://localhost:3002/v1/chat', data, {headers})
    .then(function (response) {
      console.log(`Message sent from ${randomName} to ${randomPhoneNumber}: ${currentMessage}`);

      currentMessageIndex++; // Move to the next message

      // If all messages have been sent to the current phone number, move to the next phone number
      if (currentMessageIndex === messages.length) {
        currentPhoneNumberIndex++; // Move to the next phone number
        currentMessageIndex = 0; // Reset the message index

        // If there are more phone numbers, continue sending
        if (currentPhoneNumberIndex < arrayOfNumbers.length) {
          setTimeout(sendRequest, 5000); // Wait 5 seconds before sending to the next phone number
        } else {
          console.log("All messages sent.");
        }
      } else {
        setTimeout(sendRequest, 5000); // Send the next message after 5 seconds
      }
    })
    .catch(function (error) {
      console.log(`Failed to send message from ${randomName} to ${randomPhoneNumber}: ${currentMessage}`);
      console.error(error);
    });
}

// Start sending requests
sendRequest();
