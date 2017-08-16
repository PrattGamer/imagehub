/* eslint-disable no-console */
const logger = require('winston');
const app = require('./app');
const opn = require('opn');
const port = app.get('port');
const server = app.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info(`Imagehub started on ${app.get('host')}:${port}`),
  opn('http://localhost:'+port,{app:'firefox'})
);
