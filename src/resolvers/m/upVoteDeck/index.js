const { clearLog, getUserId } = require("../../../utils");

async function upVoteDeck(parent, { id, quality }, ctx) {

  const userId = getUserId(ctx);

  if (!userId) {
    return "Cannot Up Vote Deck Without Auth Token";
  }

  console.log("line 9 = ", "\n");

  const didAlreadyVoteQuery = `
    query($deckId: ID!, $userId: ID!) {
      votes(
        where:{
          deck: { id: $deckId},
          author: { id: $userId }
        }
      ) {
          id
          quality
          author{
            name
          }
        }
    }
    `;

  const didAlreadyVoteVars = {
    deckId: id,
    userId,
  };

  const { votes } = await ctx.prisma.$graphql(
    didAlreadyVoteQuery,
    didAlreadyVoteVars
  );

  console.log("votes = ", votes, "\n");

  const alreadyVoted = votes.length > 0;
  console.log('alreadyVoted = ', alreadyVoted, '\n' )
  if (!!alreadyVoted) {
    return false;
  }

  const createVoteMutation = `
      mutation($deckId: ID!, $userId: ID!, $quality: Boolean!) {
        createVote(
          data: {
            quality: $quality
            deck: { connect: { id: $deckId } }
            author: { connect: { id: $userId } }
          }
        ) {
          id
          quality
          deck {
            deckName
            score
          }
        }
      }
    `;

  const createVoteVars = {
    deckId: id,
    userId,
    quality
  };

  const { createVote } = await ctx.prisma.$graphql(
    createVoteMutation,
    createVoteVars
  );

  console.log("createVote = ", createVote, "\n");

  // grab deck to be upvoted
  const deck = await ctx.prisma.deck({ id });

  let newScore;

  if (quality) {
    newScore = deck.score + 1;
  } else {
    newScore = deck.score - 1;
  }

  const mutation = `
      mutation($score: Int!, $id: ID!) {
        updateDeck(
          data: {
            score: $score
          },
          where: {
            id: $id,
          },
        ) {
            id
            deckName
            deckList
            deckDetails
            score
        }
      }
    `;

  const variables = {
    id,
    score: newScore
  };

  const { updateDeck } = await ctx.prisma.$graphql(mutation, variables);

  console.log("updateDeck = ", updateDeck, "\n");

  if (!updateDeck) {
    return false;
  } else {
    return true;
  }
}
module.exports = {
  upVoteDeck
};

// createVote(
//   data: {
//     deck: { connect: { id: "cjsnk5nj72xc10b23swm3ssnx" } }
//     quality: true
//     author: { connect: { id: "cjsc9h8ujgtw50b09cefxxap2" } }
//   }
// ) {
//   id
//   quality
//   deck {
//     deckName
//   }
// }

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
