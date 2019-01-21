import dotenv from "dotenv";
dotenv.config();

module.exports = {
  SECRET_KEY: process.env.SECRET_KEY,
  development: {
    DATABASE_URL: process.env.DATABASE_URL
  },
  testing: {
    DATABASE_URL: process.env.DATABASE_URL_TEST
  }
};
