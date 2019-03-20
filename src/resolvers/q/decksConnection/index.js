const { deckConnectionTemplateString } = require('./graphql')

async function decksConnection(parent, args, ctx) {
  console.log('args = ', args, '\n' )

  const result = await ctx.prisma.$graphql(
    deckConnectionTemplateString,
    {...args}
  );

  console.log('result = ', result, '\n' )

  return result.decksConnection
};


module.exports = {
  decksConnection,
}


// console.log(
//   'ctx.request.headers = ',
//   Object.keys(ctx.request.headers), '\n'
// );
