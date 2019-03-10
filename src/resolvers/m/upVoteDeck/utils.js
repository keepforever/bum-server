const {
  didAlreadyVoteQuery,
  createVoteMutation,
  updateDeckMutation
} = require("./graphql");

async function didTheyVoteAlready(ctx, userId, deckId) {
  const didAlreadyVoteVars = {
    deckId,
    userId
  };

  const { votes } = await ctx.prisma.$graphql(
    didAlreadyVoteQuery,
    didAlreadyVoteVars
  );

  const alreadyVoted = votes.length > 0;

  return alreadyVoted;
};

async function createVote(ctx, deckId, userId, quality) {

  const createVoteVars = {
    deckId,
    userId,
    quality
  };

  const { createVote } = await ctx.prisma.$graphql(
    createVoteMutation,
    createVoteVars
  );
  console.log('createVote = ', createVote, '\n' )

  return !!createVote;
};





module.exports = {
  didTheyVoteAlready,
  createVote
};
