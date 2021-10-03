const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    next();
  }
};

const isadmin = (req, res, next) => {
  if (!req.session.admin) {
    res.redirect('/lawyer');
  } else {
    next();
  }
};


module.exports = { withAuth, isadmin }
