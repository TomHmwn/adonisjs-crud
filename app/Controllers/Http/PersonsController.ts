import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import UpdatePersonValidator from 'App/Validators/UpdatePersonValidator'
import Person from 'App/Models/Person'

export default class PersonsController {

  public async index({}: HttpContextContract) {
    const people = await Person.all()
    return people
  }

  public async show({ params }: HttpContextContract) {
    const person = await Person.findOrFail(params.id)
    return person
  }

  public async create({ request }: HttpContextContract) {
    const validationSchema = schema.create({
      first_name: schema.string({}, [rules.required()]),
      last_name: schema.string({}, [rules.required()]),
      phone_number: schema.string({}, [rules.required()]),
      address: schema.string({}, [rules.required()]),
    })

    const data = await request.validate({
      schema: validationSchema,
    })

    const person = await Person.create(data)
    return person
  }

  public async update({ request, params }: HttpContextContract) {

    const data = await request.validate(UpdatePersonValidator)
    const person = await Person.findOrFail(params.id)

    person.merge(data)
    await person.save()
    return person
  }

  public async delete({ params }: HttpContextContract) {
    const person = await Person.findOrFail(params.id)
    await person.delete()
    return { message: 'Person deleted successfully' }
  }
}
