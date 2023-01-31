const slugify = require("slugify");

module.exports = {
  beforeCreate(event) {
    console.log("event--------", event);
    const { data } = event.params;
    if (data.Name) {
      data.Slug = slugify(data.Name, { lower: true });
    }
  },
  beforeUpdate(event) {
    const { data } = event.params;
    if (data.Name) {
      data.Slug = slugify(data.Name, { lower: true });
    }
  },
};
