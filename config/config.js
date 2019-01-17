const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    DATABASE_URL: process.env.DATABASE_URL
  },
  testing: {
    DATABASE_URL: process.env.DATABASE_URL_TEST
  }
};
