const ParamError = require('../errors/ParamError')

const schemaValidator = require('../validations/schema')

const schemaValidate = schema => async (req, res, next) => {
  const { body, params, query } = req

  try {
    const payload = { body, params, query }
    await schemaValidator({ payload, schema })
    return next()
  } catch (validationError) {
    const error = new ParamError(validationError.errors)
    return next(error)
  }
}

module.exports = schemaValidate