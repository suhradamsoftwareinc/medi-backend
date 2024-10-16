module.exports = (...allowedRoles) => (req, res, next) => {
    const { role } = req.user;
    if (allowedRoles.includes(role)) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden: Insufficient role' });
    }
  };