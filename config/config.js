module.exports = {
    jwtSecret: 'your_jwt_secret_key', // Change this to a strong secret in production
    jwtAccessExpiry: '1h', // Access token expiry
    jwtRefreshExpiry: '7d', // Refresh token expiry

    db: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'medinvoicerdb',
    }
  };