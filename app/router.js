'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/users', controller.user.index);
  router.post('/users', controller.user.create);
  const gzip = app.middleware.gzip({});
  router.get('/gzip/users', gzip, app.controller.user.index);
  // router.post('/users', controller.user.create);
};
