const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const db = req.app.get("db");
  console.log(req.body);
  const { username, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const result = await db.sign_up([username, email, hash]).catch(err => {
    res.status(400).json("Username already exists");
  });
  req.session.user = { username: result[0].username };
  res.json(result);
};

module.exports = {
  signup
};
