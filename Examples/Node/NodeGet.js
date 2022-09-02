const https = require('https');

const options = {
  hostname: 'catfact.ninja',
  path: '/fact',
  method: 'GET',
};

const req = https.request(options, (res) => {
  res.on('data', (data) => {
    console.log(JSON.parse(data));
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
