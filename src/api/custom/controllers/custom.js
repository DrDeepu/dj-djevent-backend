"use strict";
// const {} = require('@strapi/uti')
const { sanitize } = require("@strapi/utils");
/**
 * A set of functions called "actions" for `custom`
 */

module.exports = {
  // Get logged in users
  async me(ctx) {
    // return ctx.state;
    const user = ctx.state.user;
    // console.log(ctx.response);
    if (!user) {
      return ctx.badRequest(null, [
        {
          messages: [{ id: "No authorization header was found" }],
        },
      ]);
    }
    // const data = await strapi.services.custom.find({ user: user.id });
    const data = { user };

    if (!data) {
      return ctx.notFound();
    }
    const d = await strapi.entityService.findOne("api::custom.custom");
    // return sanitize(data, { model: strapi.models.custom });
    return [data, d];
  },
};
