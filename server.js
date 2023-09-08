const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3000;

// const sequelize = require("./config/connection");

const sess = {
  secret: "you dont know my secret!!!!",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  // store: new SequelizeStore({
  //   db: sequelize,
  // }),
};

app.use(session(sess));

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use(require("./controllers"));

// Database causing issues with heroku
// sequelize.sync().then(() => app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`)));

app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));






