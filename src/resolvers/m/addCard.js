const bcrypt = require("bcryptjs");
const mtg = require("mtgsdk");
const { clearLog, isBasicLand } = require("../../utils");
const { testDeck } = require("./boiler/testString");

const nameAndQuant = (c) => {
  const [quantity] = c.match(/[0-9]*/);
  const editCard = c.replace(/ *\([^)]*\) */g, "");
  const cardName = editCard.replace(/[0-9]/g, "").trim();
  return [quantity, cardName]
}

async function addCard(parent, args, ctx) {
  let deck = [];
  let deckMap = {};
  let count = 0

  let cardsArray = testDeck.split("\n");

  for (const card of cardsArray) {
    // extract quantity from leading numbers
    const [quantity, cardName ] = nameAndQuant(card)

    if(isBasicLand(cardName)){
      const card = {
        name: cardName,
        quantity,
        type: "basic land",
        manaCost: null,
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

      const { name, manaCost, colors, type, rarity, text, imageUrl } = fetchedCard[0];

      const card = {
        name,
        manaCost,
        colors,
        type,
        rarity,
        text,
        quantity,
        imageUrl,
      };

      deckMap[card.name] = card
      count++
      console.log('count = ', count, '\n' )

    }

  }

  // console.log('deckMap length = ', Object.keys(deckMap), '\n' )

  // console.log('cardsArray.length = ', cardsArray, '\n' )

  if (Object.keys(deckMap).length === cardsArray.length) {
    // console.log("done", "\n");
    console.log('deckMap = ', deckMap, '\n' )
    return JSON.stringify(deckMap);
  } else {
    return "something went wrong"
  }

  return true;
}

module.exports = {
  addCard
};
