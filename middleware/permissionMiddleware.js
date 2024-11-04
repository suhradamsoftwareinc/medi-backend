module.exports = (...requiredPermissions) => (req, res, next) => {
    const { permissions } = req.user;
    if (requiredPermissions.every(permission => permissions.includes(permission))) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
    }
  };