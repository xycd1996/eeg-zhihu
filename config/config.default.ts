import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // 用于cookie签名密钥
  config.keys = appInfo.name + '_xyc_qwer_!@#$'

  config.middleware = []

  config.cluster = {
    listen: {
      path: '',
      port: 3000,
      hostname: '0.0.0.0',
    },
  }

  config.sequelize = {
    dialect: 'mysql',
    host: '47.99.209.230',
    port: 3306,
    database: 'zhi_hu',
    username: 'root',
    password: 'Xuyuchen-1996',
    define: {
      paranoid: true,
      timestamps: true,
      underscored: true,
    },
    timezone: '+8:00',
  }

  config.security = { csrf: false }

  config.validate = {
    convert: false,
  }

  config.onerror = {
    // 统一返回json错误堆栈
    accepts: () => {
      return 'json'
    },
    json: (err, ctx) => {
      ctx.status = 400
      ctx.body = err
    },
  }

  return {
    ...config,
  }
}
