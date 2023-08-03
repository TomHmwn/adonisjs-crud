import Factory from '@ioc:Adonis/Lucid/Factory'
import Person from 'App/Models/Person'

export const PersonFactory = Factory.define(Person, ({ faker }) => {
  return {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    phone_number: faker.phone.phoneNumber(),
    address: faker.address.streetAddress(),
  }
}).build()