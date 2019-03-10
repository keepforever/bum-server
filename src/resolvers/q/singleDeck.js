const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUserId, clearLog } = require("../../utils");

async function singleDeck(parent, { deckId }, ctx) {
  console.log("deckId = ", deckId, "\n");

  const fragment = `
    fragment DeckInfo on Deck {
      id
      deckName
      deckDetails
      deckList
      score
      author {
        id
        name
        email
      }
    }
    `;
  const deck = await ctx.prisma.deck({ id: deckId }).$fragment(fragment);

  console.log("deck = ", deck, "\n");

  return deck;
}

module.exports = {
  singleDeck
};

// console.log(
//   'ctx.request.headers = ',
//   Object.keys(ctx.request.headers), '\n'
// );
