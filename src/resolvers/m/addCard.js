const bcrypt = require("bcryptjs");
const mtg = require("mtgsdk");
const { clearLog } = require("../../utils");
const { testDeck } = require("./boiler/testString");

async function addCard(parent, args, ctx) {

  let deck = [];
  let deckMap = {};

  const cardsArray = testDeck.split("\n")
  cardsArray.forEach(async (c, i) => {
    console.log(`card ${i}`, '\n' )
    // extract quantity from leading numbers
    const quantity = c.match(/[0-9]*/);
    const editCard  = c.replace(/ *\([^)]*\) */g, "");
    const cardName = editCard.replace(/[0-9]/g, "").trim()

    let fetchedCard;
    try {
      fetchedCard = await mtg.card.where({
        name: `${cardName}`,
        pageSize: 1
      });
    } catch (e) {
      console.log("e = ", e, "\n");
    }

    const {
      name,
      manaCost,
      colors,
      type,
      rarity,
      text,
    } = fetchedCard[0]

    const card = {
      name,
      manaCost,
      colors,
      type,
      rarity,
      text,
      quantity
    };

    console.log(`card name ${i} = `, card.name, '\n' )

    deck.push(card)

    if(deck.length === cardsArray.length){
      console.log('done', '\n' )
      return false
    }

  })

  console.log('deck = ', deck, '\n' )


  return true;
}

module.exports = {
  addCard
};
