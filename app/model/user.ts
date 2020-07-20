import { Application } from 'egg'

export default (app: Application) => {
  const { DataTypes } = app.Sequelize
  const User = app.model.define(
    'User',
    {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true, unique: true },
      name: { type: DataTypes.STRING(32), allowNull: false },
      password: { type: DataTypes.CHAR(64), allowNull: false },
      avatar_url: DataTypes.STRING(),
      business: {
        type: DataTypes.UUID,
        references: {
          model: 'Topic',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION',
      },
      gender: {
        type: DataTypes.ENUM({
          values: ['man', 'woman'],
        }),
        defaultValue: 'man',
        allowNull: false,
      },
      headline: DataTypes.TEXT,
      locations: DataTypes.CHAR(32),
    },
    {
      // 逻辑删除是否开启
      tableName: 'User',
      comment: '用户信息',
    }
  )

  return class extends User {}
}
