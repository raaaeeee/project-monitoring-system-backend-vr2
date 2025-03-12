'use strict';

/**
 * project-worker router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::project-worker.project-worker');
