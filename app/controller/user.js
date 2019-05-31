'use strict';

const Controller = require('egg').Controller;

const createRule = {
  username: {
    type: 'email',
  },
  password: {
    type: 'password',
    // compare: 're-password',
  },
};

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.logger.info(ctx.request.query);
    // this.logger(ctx.request.query);
    let datas = await ctx.service.user.list();
    datas = ctx.helper.alterUser(datas);
    ctx.body = datas;
  }

  async create() {
    const ctx = this.ctx;
    try {
      ctx.validate(createRule);
      ctx.body = ctx.request.body;
    } catch (err) {
      ctx.logger.warn(err.errors);
      ctx.response.status = 400;
      ctx.body = {
        errors: err.errors[0].message,
        code: err.errors[0].code,
        field: err.errors[0].field,
        success: false,
      };
    }
  }
}

module.exports = UserController;
