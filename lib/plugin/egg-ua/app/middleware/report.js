'use strict';

module.exports = () => {
  return async function(ctx, next) {
    const startTime = Date.now();
    await next();
    console.log('plugin middleware -----------------------')
    console.log(Date.now() - startTime);
    console.log('plugin middleware -----------------------')
  };
};
