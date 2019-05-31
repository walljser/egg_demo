'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/middleware/robot.test.js', () => {
  it('should block robot', () => {
    return app.httpRequest()
      .get('/users')
      .set('User-Agent', 'Baiduspider')
      .expect(403);
  });
});
