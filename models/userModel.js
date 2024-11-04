const jwt = require("jsonwebtoken");
const { jwtSecret, jwtAccessExpiry, jwtRefreshExpiry } = require("../config/config");
const db = require("../config/db");
const bcrypt = require('bcrypt');
const crypto = require('crypto');

class UserModel {
  static generateAccessToken(user) {
    return jwt.sign(
      { id: user.id, role: user.role, permissions: user.permissions },
      jwtSecret,
      { expiresIn: jwtAccessExpiry }
    );
  }

  static generateRefreshToken(user) {
    const refreshToken = crypto.randomBytes(64).toString('hex'); // Generate a random string
    const expiresAt = new Date(); // Set expiration date
    expiresAt.setDate(expiresAt.getDate() + 7 * 1000);
    console.log(jwtRefreshExpiry,expiresAt);
    // Store refreshToken and expiresAt in the database associated with the user
    // Example: saveToDatabase(user.id, refreshToken, expiresAt);
    
    return { refreshToken, expiresAt };
  }

  static verifyToken(token) {
    try {
      return jwt.verify(token, jwtSecret);
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        throw new Error('Token expired');
      } else if (err.name === 'JsonWebTokenError') {
        throw new Error('Invalid token');
      }
      throw err;
    }
  }

  static async verifyRefreshToken(refreshToken) {
    // Fetch the refresh token from the database and check validity
    const tokenData = await fetchFromDatabase(refreshToken);

    if (tokenData && tokenData.expiresAt > new Date()) {
      return { valid: true, userId: tokenData.userId }; // Return userId or other relevant data
    }
    return { valid: false };
  }

  

  static async findUserByUsername(username) {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [username]);
    return rows[0];
  }

  static async validatePassword(user,password) {
    try {
      const isMatch = await bcrypt.compare(password, user.password);
      return isMatch;  // Returns true if passwords match, otherwise false
    } catch (error) {
      console.error('Error comparing passwords:', error);
      return false;
    }
  }

  static async createUser(username, password, role) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db.query(
      "INSERT INTO users (email, password, role) VALUES (?, ?, ?)",
      [username, hashedPassword, role]
    );
    return result.insertId;
  }
}

module.exports = UserModel;
