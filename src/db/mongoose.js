const mongoose = require('mongoose');
require('dotenv').config({ path: `${process.cwd()}/config/.env` });

mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
