// const { sanitizeEntity } = require("strapi/utils");

// module.exports = {
//   async menubar(ctx) {
//     const user = ctx.state.user;

//     if (!user) {
//       return ctx.badRequest(null, [
//         {
//           messages: [
//             {
//               id: "No authorization header was found",
//             },
//           ],
//         },
//       ]);
//     }
//     const data = await strapi.services.events.find({ user: user.id });
//     if (!data) {
//       return ctx.notFound();
//     }
//     return sanitizeEntity(data, { model: strapi.models.events });
//   },
// };
