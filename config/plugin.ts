import { EggPlugin } from 'egg'

const plugin: EggPlugin = {
  static: true,
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  onerror: {
    enable: true,
  },
}

export default plugin
