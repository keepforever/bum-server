const { clearLog, getUserId } = require("../../../utils");
const {
  didAlreadyVoteQuery,
  createVoteMutation,
  updateDeckMutation
} = require('./graphql');

const { didTheyVoteAlready, createVote } = require('./utils');

async function upVoteDeck(parent, { id, quality }, ctx) {

  const userId = getUserId(ctx);

  if (!userId) {
    return "Cannot Up Vote Deck Without Auth Token";
  }

  const alreadyVoted = await didTheyVoteAlready(ctx, userId, id);

  if (!!alreadyVoted) {
    return false;
  } else {
    const createVoteSuccess = await createVote(ctx, id, userId, quality)
  }

  // grab deck to be upvoted
  const deck = await ctx.prisma.deck({ id });

  let newScore;

  if (quality) {
    newScore = deck.score + 1;
  } else {
    newScore = deck.score - 1;
  }

  const variables = {
    id,
    score: newScore
  };

  const { updateDeck } = await ctx.prisma.$graphql(updateDeckMutation, variables);

  if (!updateDeck) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  upVoteDeck
};

// PRISMA CLIENT MUTATION DOESN'T WORK AS EXPECTED
// SOMETHING TO DO WITH INPUT FORMAT, ALSO SOME FORUM POSTS
// INDICATE IT COULD BE A BUG AND RAW GRAPHQL MIGHT
// BE THE WAY TO GO.

// DOSEN'T WORK, BUT SHOULD, OR IT'S DARN CLOSE;
// TODO: WRITE FORUM POST
// const newVote = await ctx.prisma.createVote({
//   deck: { connect: { id: "cjsnk5nj72xc10b23swm3ssnx" } },
//   author: { connect: { id: "cjsc9h8ujgtw50b09cefxxap2" } },
//   quality: quality
// });
