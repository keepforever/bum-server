function isSplitCard(card) {
  let regex = /\/\//;
  console.log(`regex.test(${card}) =` , regex.test(card), '\n' )
  return regex.test(card);
}

function nameAndQuant(c) {
  const [quantity] = c.match(/[0-9]*/);
  const editCard = c.replace(/ *\([^)]*\) */g, "");
  const cardName = editCard.replace(/[0-9]/g, "").trim();
  return [quantity, cardName];
}

function nameAndQuantSplit(c) {
  const [quantity] = c.match(/[0-9]*/);

  const regex = /[a-z]* \/\/ [a-z]*/i;
  const [splitCardName] = c.match(regex);
  const [_, setCode] = c.match(/\(([^)]+)\)/);

  console.log("setText = ", setCode, "\n");

  console.log("splitCardName = ", splitCardName, "\n");

  let cards = splitCardName.split(" ").filter(el => {
    return el !== "//";
  });

  const cardKey = cards.join("_")

  return {
    cardNames: cards,
    quantity,
    cardKey,
  };
}

function buildCardObj(c, quantity) {
  const { name, manaCost, colors, type, rarity, text, imageUrl } = c;
  return {
    name,
    manaCost,
    colors,
    type,
    rarity,
    text,
    imageUrl,
    quantity
  };
}

function isBasicLand(c) {

  const editCard = c.replace(/ *\([^)]*\) */g, "");
  const cardName = editCard.replace(/[0-9]/g, "").trim();

  if (
    cardName.toLowerCase() === "swamp" ||
    cardName.toLowerCase() === "forest" ||
    cardName.toLowerCase() === "island" ||
    cardName.toLowerCase() === "plains" ||
    cardName.toLowerCase() === "mountain"
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  buildCardObj,
  nameAndQuant,
  isBasicLand,
  isSplitCard,
  nameAndQuantSplit
};
