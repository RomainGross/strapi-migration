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
      return strapi.services.articles.countSearch(ctx.query);
    }

    return strapi.services.articles.count(ctx.query);
  },
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.articles.findOne({ id });

    if (entity.statut !== "publie") {
      return;
    }

    return sanitizeEntity(entity, { model: strapi.models.articles });
  },
  async find(ctx) {
    let entities;

    ctx.query = {
      ...ctx.query,
      statut: "publie",
    };

    if (ctx.query._q) {
      entities = await strapi.services.articles.search(ctx.query);
    } else {
      entities = await strapi.services.articles.find(ctx.query);
    }

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.articles })
    );
  },
};
