
// check env variable
require('dotenv').config({path: __dirname + '/.env'});
const HOSTNAME = process.env.NODEHOST || '0.0.0.0';
const PORT = process.env.NODEPORT || 3000;

// setup app handle 
const app = require('./simple-mariadb-app');

// start listening
var listener = app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
    const {port} = listener.address();
    console.log(port);
    console.log(listener.address());
  });

  setTimeout(() => {
      console.log('Kill après :  60 000 ms');
      process.kill(0);
  },60000);
  


