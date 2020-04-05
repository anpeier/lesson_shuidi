let isLogged = true;

module.exports = (ctx, next) => {
  if (!isLogged) {
    ctx.redirect('/login');
  } else {
    next();
  }
}