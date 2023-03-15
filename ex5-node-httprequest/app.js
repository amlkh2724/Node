const http = require('http');

const options = {
  method: 'GET',
  hostname: '63fc94bb8ef914c5559a97d1.mockapi.io',
  path: '/escape',
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(data);
  });
});

req.on('error', (err) => {
  console.error(err);
});

req.end();
