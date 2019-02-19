const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { getUserId, clearLog } = require('../../utils')

function createToken(userId) {
  return jwt.sign({ userId, expiresIn: "7d" }, process.env.APP_SECRET)
}

async function me(parent, args, ctx) {

  const id = getUserId(ctx)

  const meUser = await ctx.prisma.user({ id })

  const mySettings = await ctx.prisma.user({ id }).userSettings()
  console.log('mySettings = ', mySettings, '\n' )

  const myInbox = await ctx.prisma.user({ id }).inbox();
  console.log('myInbox = ', myInbox, '\n' )
  
  if(myInbox) {
    meUser.inbox = myInbox;
  }

  if(mySettings) {
    meUser.userSettings = mySettings;
  }

  console.log('meUser = ', meUser, '\n' )

  return meUser
};


module.exports = {
  me,
}


// console.log(
//   'ctx.request.headers = ',
//   Object.keys(ctx.request.headers), '\n'
// );
