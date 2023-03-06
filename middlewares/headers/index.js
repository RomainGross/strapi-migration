"use strict";

module.exports = () => ({
  initialize: function() {
    strapi.app.use(async (ctx, next) => {
      await next();
      ctx.remove("X-Powered-By");
    });
  }
});
