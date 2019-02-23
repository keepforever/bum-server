const jwt = require('jsonwebtoken')

function getUserId(ctx, jwtToken) {
  let token = '';
  if(jwtToken) {
    token = jwtToken
  } else {
    const Authorization = ctx.request.get('Authorization')
    token = Authorization.replace('Bearer ', '')
  }

  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET)
    return userId
  }

  throw new AuthError()
}

function clearLog(text, item) {
  console.log(`


  ###########################################
                  ${text}
  ###########################################


  `, item, `

  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  ${text}
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  `)
}

function createToken(userId) {
    return jwt.sign({ userId, expiresIn: "7d" }, process.env.APP_SECRET)
}

class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

function isBasicLand(str) {
  if(
    str.toLowerCase() === "swamp" ||
    str.toLowerCase() === "forest" ||
    str.toLowerCase() === "island" ||
    str.toLowerCase() === "plains" ||
    str.toLowerCase() === "mountain") {
      return true
    } else {
      return false
    }
}

module.exports = {
  getUserId,
  AuthError,
  clearLog,
  createToken,
  isBasicLand
}
