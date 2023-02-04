"use strict";
// const { sanitize } = require("@strapi/utils");
/**
 * event controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event.event", ({ strapi }) => ({
  async me(ctx) {
    // ctx.query = { ct: "/api/user/me" };
    const events = await super.find(ctx);
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest(null, [
        {
          messages: [{ id: "No authorization header was found" }],
        },
      ]);
    }
    // return events.data[0].attributes.user;
    const events_with_users = events.data.filter((singlevents) => {
      return singlevents.attributes.user.data;
    });
    const user_events = events_with_users.filter((singlevents) => {
      return singlevents.attributes.user.data.id === user.id;
    });

    return user_events;

    // const data = await strapi.services.event.find({ user: user.id });

    // if (!data) {
    //   return ctx.notFound();
    // }

    // return sanitize(data, { model: strapi.models.events });
  },
}));
