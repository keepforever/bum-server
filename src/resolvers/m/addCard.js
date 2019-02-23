const bcrypt = require("bcryptjs");
const mtg = require("mtgsdk");
const { clearLog, isBasicLand } = require("../../utils");
const { testDeck } = require("./boiler/testString");


async function addCard(parent, args, ctx) {
  let deck = [];
  let deckMap = {};
  let count = 0

  let cardsArray = testDeck.split("\n");



  for (const c of cardsArray) {
    // extract quantity from leading numbers
    const quantity = c.match(/[0-9]*/);
    const editCard = c.replace(/ *\([^)]*\) */g, "");
    const cardName = editCard.replace(/[0-9]/g, "").trim();

    if(isBasicLand(cardName)){
      const card = {
        name,
        quantity,
        type: "basic land"
      };
      deckMap[card.name] = card
      count++
    } else {
      let fetchedCard;
      try {
        fetchedCard = await mtg.card.where({
          name: `${cardName}`,
          pageSize: 1
        });
      } catch (e) {
        console.log("e = ", e, "\n");
      }

      const { name, manaCost, colors, type, rarity, text } = fetchedCard[0];

      const card = {
        name,
        manaCost,
        colors,
        type,
        rarity,
        text,
        quantity
      };

      deckMap[card.name] = card
      count++
      console.log('count = ', count, '\n' )

    }

  }

  console.log('deckMap length = ', Object.keys(deckMap), '\n' )

  console.log('cardsArray.length = ', cardsArray, '\n' )

  if (Object.keys(deckMap).length === cardsArray.length) {
    console.log("done", "\n");
    return JSON.stringify(deckMap);
  } else {
    return "something went wrong"
  }

  return true;
}

module.exports = {
  addCard
};
