const express = require('express');
const app = express();
const compression = require('compression');
app.use(compression());

const getDevicePath = req => {
  const ua = req.header('user-agent');
  return /mobile/i.test(ua) ? '/public-mobile' : '/public-desktop';
};

/* app.use(express.static(__dirname + '/public-mobile')); */

app.set('port', process.env.PORT || 5000);

app.get('/', function(req, res) {
  res.sendFile(__dirname + getDevicePath(req) + '/index.html');
});

app.get(/(.*?)(chunk.js|bundle.js|.ico|.svg|bundle.css)/, function(req, res) {
  res.sendFile(__dirname + getDevicePath(req) + req.path);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
