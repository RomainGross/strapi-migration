"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      const hasCategorie = await strapi.services.articles.hasCategorie(data);
      if (!hasCategorie) {
        throw new Error("Categorie is required!");
      }
    },
    async beforeUpdate(params, data) {
      const hasCategorie = await strapi.services.articles.hasCategorie(data);
      if (!hasCategorie) {
        throw new Error("Categorie is required!");
      }
    },
  },
};
