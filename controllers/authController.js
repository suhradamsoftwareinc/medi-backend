const UserModel = require('../models/userModel');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findUserByUsername(username);
    console.log(username,password);
    if (!user || !(await UserModel.validatePassword(user, password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const accessToken = UserModel.generateAccessToken(user);
    const refreshToken = UserModel.generateRefreshToken(user);
    // Save refresh token to database or in-memory store if needed
    res.json({ accessToken, refreshToken });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    UserModel.createUser("admin","admin","admin");
    res.json('Success');
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.refreshToken = async (req, res) => {
  const { refreshToken } = req.body;
  try {
    const decoded = UserModel.verifyToken(refreshToken);
    // Verify the refresh token against stored tokens
    const newAccessToken = UserModel.generateAccessToken(decoded);
    res.json({ accessToken: newAccessToken });
  } catch (error) {
    res.status(401).json({ message: 'Invalid refresh token' });
  }
};

exports.logout = (req, res) => {
  // Implement token blacklisting if necessary
  res.json({ message: 'Logged out successfully' });
};