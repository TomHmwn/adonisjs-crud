import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdatePersonValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    first_name: schema.string.optional({ trim: true }),
    last_name: schema.string.optional({ trim: true }),
    phone_number: schema.string.optional({}, [
      rules.mobile()
    ]),
    address: schema.string.optional({ trim: true }),
  })

  public messages = {}
}
