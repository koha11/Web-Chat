class MessageController {
  index(req, res, next) {
    res.render('messageView/index');
  }
}

module.exports = new MessageController();
