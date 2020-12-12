const express = require("express");
const mongoose = require("mongoose");
const apiRoute = require("./routes/api-routes");
const htmlRoute = require("./routes/html-routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fitness',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
// routes
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
