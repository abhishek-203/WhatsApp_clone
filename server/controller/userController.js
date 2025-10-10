import User from "../model/User.js";

export const addUser = async (req, res) => {
  try {
    let exist = await User.findOne({ sub: req.body.sub });
    if (exist) {
      res.status(200).json({ msg: "user already exist." });
      return;
    }
    const newUser = new User(req.body);
    await newUser.save();
    return res.status(200).json(`${newUser}, User saved `);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
