require('dotenv').config();
const { DB_USER, DB_PASS } = process.env;

module.exports = {
    url: `mongodb+srv://${DB_USER}:${DB_PASS}@main.uckuz1t.mongodb.net/`
};
