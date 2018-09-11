'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.group(()=>{
  Route.post('/user', "UserController.store")
  Route.get('/user/index', "UserController.index")
  Route.post('/login', "UserController.login")
  Route.get('/', 'PostController.index')
  Route.get('/:id', 'PostController.show')
  Route.post('/', 'PostController.store').validator('validate')
  Route.put('/:id', 'PostController.update')
  Route.delete('/:id', 'PostController.destroy')
}).prefix('api/post')
