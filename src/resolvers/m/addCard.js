const bcrypt = require("bcryptjs");
const mtg = require("mtgsdk");
const { clearLog } = require("../../utils");
const { testString } = require("./boiler/testString")

async function addCard(parent, args, ctx) {

  let deckMap = {};

  console.log(testString)
  testString.split("\n").forEach(card => {
    // remove leading numbers from string
    console.log('typeof card = ', typeof card, '\n' )

    console.log(card.replace(/^[^.]+\./, ""))

  })



  return true;
}

module.exports = {
  addCard
};

// const set = await mtg.set.find("AER");
// console.log("set = ", set, "\n");

// const card = await mtg.card.where({ name: "Gaea\'s Blessing", pageSize: 1 });
//
// console.log("card = ", card, "\n");

// const aetherRevolt = await mtg.set.find("AER")
//
// clearLog('AER.booster', aetherRevolt.set.booster)
//
// Object.keys(aetherRevolt.set.booster).forEach((key) => {
//   console.log('key = ', key, '\n' )
// })

// const blackLotus = await mtg.card.where({ name: 'Lotus', pageSize: 1})
//
// const lotusObj = blackLotus[0];

// Object.keys(blackLotus[0]).forEach(key => {
//   console.log('blackLotus[0][key] = ', blackLotus[0][key], '\n' )
// })

// Object.keys(lotusObj).forEach( key => {
//   console.log(`lotusObj[${key}] = `, lotusObj[key], '\n' )
// })
