const Code = {
  "fetch-js": `const fetch = require('node-fetch');

const url = 'https://feedparsify.cyclic.app/path';

fetch(url)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));`,

  "axios-js": `const axios = require("axios");

  const url = 'https://feedparsify.cyclic.app/path';
  
  axios.get(url)
    .then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });`,

  "python-req": `import requests

  url = "https://feedparsify.cyclic.app/path"
  
  response = requests.request("GET", url)
  
  print(response.text)`,

  initial: { code: `console.log("Example code goes here")`, type: "javascript" }
};

export default Code;