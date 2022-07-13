const axios = require("axios").default;

const options = {
  method: 'GET',
  url: 'https://api.opensea.io/api/v1/asset/0x011c77fa577c500deedad364b8af9e8540b808c0/6891/offers?limit=20',
  headers: {Accept: 'application/json', 'X-API-KEY': 'e6cc4c87a86740de959622f78c8bca8a'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});