// 'use strict';

// /**
//  * custom service
//  */

// module.exports = () => ({});
"use strict";

/**
 * event service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::custom.custom");
