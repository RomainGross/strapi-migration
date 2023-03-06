"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  hasCategorie: async (article) => {
    if (!article.categorie) {
      return false;
    }

    return true;
  },
};
