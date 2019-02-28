const { me } = require("./me");
const { allDecks } = require("./allDecks");


const q = {
  async me(parent, args, ctx) {
    return await me(parent, args, ctx);
  },
  async allDecks(parent, args, ctx) {
    return await allDecks(parent, args, ctx);
  }
};

module.exports = { q };
