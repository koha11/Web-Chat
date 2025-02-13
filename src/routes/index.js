const homeRouter = require('./home');
const messageRouter = require('./home');
const accountRouter = require('./home');

function route(app) {
  app.use('/', homeRouter);
  app.use('/message', messageRouter);
  app.use('/me', accountRouter);
}

module.exports = route;
