import 'dotenv/config';

const config = {
  development: {
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_NAME_DEV,
    host: process.env.DB_HOST_DEV,
    dialect: 'mysql',
    seederStorage: 'sequelize',
  },
  test: {
    username: process.env.DB_USER_TEST,
    password: process.env.DB_PASSWORD_TEST,
    database: process.env.MYSQL_DATABASE,
    host: process.env.DB_HOST_TEST,
    dialect: 'mysql',
    seederStorage: 'sequelize',
    logging: false,
  },
  production: {
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_NAME_DEV,
    host: process.env.DB_HOST_DEV,
    dialect: 'mysql',
    seederStorage: 'sequelize',
    logging: false,
  },
};

module.exports = config;
