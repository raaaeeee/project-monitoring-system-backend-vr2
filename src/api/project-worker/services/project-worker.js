'use strict';

/**
 * project-worker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project-worker.project-worker');
