import { Application } from 'egg'

export default (app: Application) => {
  const router = app.router.namespace('/users')

  router.get('/', app.controller.user.find)

  router.get('/:id', app.controller.user.findById)

  router.post('/', app.controller.user.create)
}
