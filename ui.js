module.exports.lamiData = {
    email: {
      header: 'New Client Inquiry Received',
      body: ' We have received a new client inquiry from <%= customerNumber %>. They are interested in our services and have expressed a desire to become a client. Please take immediate action to follow up with them, provide any necessary information, and initiate the onboarding process.',
      to_addr: 'Sales Agent'
    },
    customerDetails: {
      customerNumber: "123456",
      department: "Sales",
      country: "Kenya",
      updateDate: new Date().toLocaleDateString()
    }
  };
  