import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class People extends BaseSchema {
  protected tableName = 'people'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('person_id')
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("phone_number").notNullable();
      table.string("address").notNullable();
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
