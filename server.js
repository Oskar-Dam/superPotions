const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 5000;

require("dotenv").config();

const {MONGODB_URI_TEST, MONGODB_URI_PROD, NODE_ENV} = process.env

const connectionString = NODE_ENV === 'test' ? MONGODB_URI_TEST : NODE_ENV === 'development' ? MONGODB_URI_TEST : MONGODB_URI_PROD
console.log(connectionString)
mongoose
  .connect(connectionString)
  .then(() => {
    app.listen(PORT, console.log(`Potion server started on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });