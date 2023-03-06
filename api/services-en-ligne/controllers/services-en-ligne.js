"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  count(ctx) {
    ctx.query = {
      ...ctx.query,
      statut: "publie",
    };

    if (ctx.query._q) {
      return strapi.services["services-en-ligne"].countSearch(ctx.query);
    }

    return strapi.services["services-en-ligne"].count(ctx.query);
  },
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services["services-en-ligne"].findOne({ id });

    if (entity.statut !== "publie") {
      return;
    }

    return sanitizeEntity(entity, {
      model: strapi.models["services-en-ligne"],
    });
  },
  async find(ctx) {
    let entities;

    ctx.query = {
      ...ctx.query,
      statut: "publie",
    };

    if (ctx.query._q) {
      entities = await strapi.services["services-en-ligne"].search(ctx.query);
    } else {
      entities = await strapi.services["services-en-ligne"].find(ctx.query);
    }

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models["services-en-ligne"] })
    );
  },
};
