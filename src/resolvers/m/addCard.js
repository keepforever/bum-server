const bcrypt = require("bcryptjs");
const mtg = require("mtgsdk");
const { clearLog, isBasicLand } = require("../../utils");
const { testDeck, fullTestDeck } = require("./boiler/testString");

const nameAndQuant = (c) => {
  const [quantity] = c.match(/[0-9]*/);
  const editCard = c.replace(/ *\([^)]*\) */g, "");
  const cardName = editCard.replace(/[0-9]/g, "").trim();
  return [quantity, cardName]
}

const buildCardObj = (c, quantity) => {

  const { name, manaCost, colors, type, rarity, text, imageUrl } = c;

  return {
    name,
    manaCost,
    colors,
    type,
    rarity,
    text,
    imageUrl,
    quantity,
  };

}

async function addCard(parent, args, ctx) {
  let deck = [];
  let deckMap = {};
  let count = 0

  // let cardsArray = testDeck.split("\n");
  let cardsArray = fullTestDeck.split("\n");


  for (const card of cardsArray) {
    // extract quantity from leading numbers
    const [quantity, cardName ] = nameAndQuant(card)

    if(isBasicLand(cardName)){
      const card = {
        name: cardName,
        quantity,
        type: "basic land",
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
        const card = {
          name: cardName,
          quantity,
        };
        deckMap[card.name] = card
        count++
      }

      const builtCard = buildCardObj(fetchedCard[0], quantity)

      deckMap[builtCard.name] = builtCard
      count++
      console.log('count = ', count, '\n' )

    }
  }

  if (Object.keys(deckMap).length === cardsArray.length) {
    // console.log("done", "\n");
    console.log('deckMap = ', deckMap, '\n' )
    return JSON.stringify(deckMap);
  } else {
    return "something went wrong"
  }

  return "error";
}

module.exports = {
  addCard
};
