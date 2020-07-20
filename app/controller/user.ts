import { Controller } from 'egg'

export default class UserController extends Controller {
  public async find() {
    const { ctx } = this
    ctx.body = await ctx.service.user.find()
  }

  public async findById() {
    const { ctx } = this
    ctx.body = await ctx.service.user.findById()
  }

  public async create() {
    const { ctx } = this
    ctx.body = await ctx.service.user.create()
  }
}
