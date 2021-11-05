//import pino from "pino"
const pino = require('pino')

// log levels system
const levels = {
  http: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60
};

//console.log('process.env.LOGLEVEL : ' + process.env.LOGLEVEL);
// create a Pino logger
const logger = pino({
  // set the own levels
  customLevels: levels,
  // use only the custom levels
  useOnlyCustomLevels: true,
  // the minimum log level to be display
  level: process.env.LOGLEVEL || "error"
});

// export the logger
// export default logger; <= marche pas
module.exports = logger;