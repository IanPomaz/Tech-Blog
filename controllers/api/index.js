const router = require("express").Router();
const { User } = require("../../models");

router.post("/user", (req, res) => {
  User.create(req.body).then((userData) => {
    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.json(userData);
    });
  });
});

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((userData) => {
    if (!userData) {
      res.status(400).json({ message: "incorrect input!" });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

    console.log(req.body.password,validPassword);

    if (!validPassword) {
      res.status(400).json({ message: "incorrect password!" });
      return;
    }

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.json(userData);
    });
  });

});

module.exports = router;
