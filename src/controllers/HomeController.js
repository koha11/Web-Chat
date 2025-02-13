class HomeController {
  index(req, res, next) {
    res.render('homeView/index');
  }
}

module.exports = new HomeController();
