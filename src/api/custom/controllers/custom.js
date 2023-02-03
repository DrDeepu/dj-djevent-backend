"use strict";

/**
 * A set of functions called "actions" for `custom`
 */

module.exports = {
  // Get logged in users
  async me(ctx) {
    const user = ctx.state.user;
    // console.log(ctx.response);
if(!user){
  return ctx.badRequest(null,[{}])
}
    // const user = ctx.state;
    return user;
  },
};
