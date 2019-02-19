const { me } = require("./me");

const q = {
  async me(parent, args, ctx) {
    return await me(parent, args, ctx);
  }
};

module.exports = { q };
