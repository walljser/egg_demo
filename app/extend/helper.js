'use strict';

module.exports = {
  alterUser(users) {
    return users.map(user => ({
      ...user,
      isVip: 1,
      password: '111111',
    }));
  },
};
