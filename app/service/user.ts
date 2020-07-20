import { Service } from 'egg'
import { Op } from 'Sequelize'

export default class User extends Service {
  public async find() {
    const { ctx } = this
    const { page = 1, page_size = 10, q = '', fields = '' } = ctx.query
    const offset = (parseInt(page) - 1) * page_size
    const limit = parseInt(page_size)
    const field = (fields as string)
      .trim()
      .split(';')
      .filter((f) => f)
    const exclude = ['business', 'gender', 'headline', 'locations'].filter((f) => !field.includes(f))
    const users = await ctx.model.User.findAndCountAll({
      offset,
      limit,
      where: {
        name: {
          [Op.like]: '%' + q + '%',
        },
      },
      attributes: {
        exclude: [...exclude, 'password'],
      },
    })
    return users
  }

  public async findById() {
    const { ctx } = this
    const user = await ctx.model.User.findByPk(ctx.params.id, {
      attributes: {
        exclude: ['password'],
      },
    })
    return user
  }

  public async create() {
    const { ctx } = this
    ctx.validate({
      name: { type: 'string', required: true },
      password: { type: 'string', required: true },
      avatar_url: { type: 'string', required: false },
    })
    const { name, password } = ctx.request.body
    const user = await ctx.model.User.create({ name, password: ctx.helper.md5(password) })
    return user
  }
}
