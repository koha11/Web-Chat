class HomeController {
  index(req, res, next) {
    res.render('homeView/index');
  }

  login(req, res, next) {
    res.render('homeView/login');
  }
}

module.exports = new HomeController();
