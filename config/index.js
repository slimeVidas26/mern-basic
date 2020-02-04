// config/index.js
const dbuser = 'mern-basic';
const dbpassword = 'trottinette';

const MONGODB_URI = `mongodb+srv://${dbuser}:${dbpassword}@cluster0-tmbr7.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = MONGODB_URI;