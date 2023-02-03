module.exports = {
  routes: [
    {
      method: "GET",
      path: "/custom/me",
      handler: "custom.me",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
