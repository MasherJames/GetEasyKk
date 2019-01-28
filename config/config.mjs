import dotenv from "dotenv";
dotenv.config();

export default {
    development: {
        DATABASE_URL: process.env.DATABASE_URL
    },
    test: {
        DATABASE_URL: process.env.DATABASE_URL_TEST
    }
};