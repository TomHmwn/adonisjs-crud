import Database from '@ioc:Adonis/Lucid/Database'
import { PersonFactory } from 'Database/factories'

export default class PersonSeeder {
  public async run () {
    await Database.table('people')
    await PersonFactory.createMany(100) // Creates 100 new Person records with fake data
  }
}