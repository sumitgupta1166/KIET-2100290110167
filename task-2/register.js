const axios = require('axios');

const data = {
  companyName: "KIET123",
  clientID: "2b62b453-a4c6-4fe2-b812-fb31f8b78b22",
  clientSecret: "HFdTrIxvhEMKbyUv",
  ownerName: "Sumit-Gupta",
  ownerEmail: "sumit.2125csit1166@kiet.edu",
  rollNo: "2100290110167"
}
axios.post('http://20.244.56.144/test/auth', data)
  .then(response => {
    console.log("API Response Status:", response.status); // Log the response status code
    console.log("API Response Data:", response.data); // Log the entire response object
  })
  .catch(error => {
    console.error("Error:", error); // Log the error object
  });

  








