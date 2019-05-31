'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async list() {
    const datas = [
      { id: 1000, name: 'ysj', age: 20 },
      { id: 1001, name: 'wall', age: 21 },
      { id: 1002, name: 'walljs', age: 22 },
      { id: 1003, name: 'greyu', age: 23 },
    ];

    return datas;
  }
}

module.exports = UserService;
