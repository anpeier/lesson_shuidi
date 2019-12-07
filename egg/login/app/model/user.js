// eslint-disable-next-line strict
module.exports = app => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize;
  const User = app.model.define('users', {
    user_id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: { type: STRING(255), allowNull: false},
    password: { type: STRING(255), allowNull: false},
    username: { type: STRING(255), allowNull: false},
    avatar_url: {
      type: STRING(255),
      defaultValue: 'xiaoan',
    },
    mobile: STRING(11),
    sex: { type:INTEGER, defaultValue: 0},
    created_at: { type: DATE, defaultValue: NOW},
    updated_at: { type: DATE, defaultValue: NOW},
  }, {
    freezeTableName: true
  });
  return User;
}
