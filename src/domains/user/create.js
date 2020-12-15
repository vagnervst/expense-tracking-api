const bcrypt = require('bcrypt')

const { BadRequest } = require('../../errors')

const create = db => async ({ email, password }) => {
  const existentUser = await db.user.findByEmail(email)
  if (existentUser) {
    throw new BadRequest('unavailable-email', 'E-mail already registered')
  }

  let encrypted = bcrypt.hashSync(password, 10)

  const user = await db.user.create({
    email,
    password: encrypted,
  })

  return user
}

module.exports = create
