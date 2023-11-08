const sendEventData = require('./sendLogsToMoja');

function dataToMoja(eventData) {
  try {
    const { msg } = eventData;
    const { call_id: callId, members } = JSON.parse(msg);

    const membersData = members.map((member) => {
      const { extension } = member;
      const { number, channel_id, member_status, call_path } = extension;
      return { number, channel_id, member_status, call_path };
    });

    console.log('Modified data is being sent to the endpoint');

    if (membersData.length === 2) {
      if (
        (membersData[0].member_status === 'ALERT' &&
          membersData[1].member_status === 'RING') ||
        (membersData[0].member_status === 'RING' &&
          membersData[1].member_status === 'ALERT')
      ) {
        console.log("this is the data sent", membersData);
        sendEventData.sendEventData(membersData);
        console.log(
          'The members on the call are in the expected status: one member is in ALERT and the other is in RING status.'
        );
      } else {
        console.log('The members on the call are not in the expected status.');
      }
    }
  } catch (error) {
    console.error(`Error processing the event data: ${error.message}`);
  }
}

module.exports = { dataToMoja };
