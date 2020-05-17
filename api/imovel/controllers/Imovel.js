'use strict';

/**
 * Imovel.js controller
 *
 * @description: A set of functions called "actions" for managing `Imovel`.
 */

module.exports = {

  /**
   * Retrieve imovel records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.imovel.search(ctx.query);
    } else {
      return strapi.services.imovel.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a imovel record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.imovel.fetch(ctx.params);
  },

  /**
   * Count imovel records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.imovel.count(ctx.query, populate);
  },

  /**
   * Create a/an imovel record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.imovel.add(ctx.request.body);
  },

  /**
   * Update a/an imovel record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.imovel.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an imovel record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.imovel.remove(ctx.params);
  }
};
