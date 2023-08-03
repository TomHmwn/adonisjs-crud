/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

import Database from '@ioc:Adonis/Lucid/Database'

Route.get('/test-db', async () => {
  try {
    await Database.rawQuery('SELECT 1')
    return 'Database is connected'
  } catch (error) {
    return `Database connection failed: ${error.message}`
  }
})

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/people', 'PersonsController.index')
Route.get('/people/:id', 'PersonsController.show')
Route.post('/people', 'PersonsController.create')
Route.put('/people/:id', 'PersonsController.update')
Route.delete('/people/:id', 'PersonsController.delete')
