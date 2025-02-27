const ObjectId = require('mongoose').Types.ObjectId;

const User = require('../models/User');
const Message = require('../models/Message');
const Chat = require('../models/Chat');

class MessageController {
  // GET METHODS

  index(req, res, next) {
    res.render('messageView/index');
  }

  chatDetails(req, res, next) {
    res.render('messageView/chatDetails');
  }

  getChatlist(req, res, next) {
    // Get Current User
    const userID = new ObjectId(res.locals._user.id);
    const user = User.findById(userID);

    Chat.find({
      users: userID,
    })
      .populate('users')
      .populate('messages')
      .then((data) => {
        const chatlist = data.map((chat) => {});
        res.json(chatlist);
      });
  }

  getMessages(req, res, next) {
    // Get Current User
    const userID = new ObjectId(res.locals._user.id);
    const user = User.findById(userID);
    const chatID = req.params.id;

    Chat.findById(chatID)
      .populate({
        path: 'messages',
        populate: {
          path: 'user', // Lấy thông tin User từ Post
        },
      })
      .then((chat) => {
        const result = chat.messages.map(
          (msgObj) => `${msgObj.user.fullname}: ${msgObj.msgBody}`
        );
        res.json(result);
        // res.json(chat.messages);
      });
  }

  // POST METHODS

  createChat(req, res, next) {
    // Get Current User
    const userID = new ObjectId(res.locals._user.id);
    const user = User.findById(userID);

    // Get form-data
    const receiverID = new ObjectId(req.body.receiverID);

    const chat = new Chat({
      users: [userID, receiverID],
      messages: [],
    });

    chat.save().then((chat) => res.json(chat));
  }

  sendMessage(req, res, next) {
    // Get Current User
    const userID = new ObjectId(res.locals._user.id);
    const user = User.findById(userID);

    // Get chatID from form-data
    const chatID = new ObjectId(req.params.id);
    const msgBody = req.body.msgBody;

    // Handle save message on db
    const message = new Message({
      user: userID,
      msgBody,
    });

    message.save().then((msg) => {
      Chat.findById(chatID).then((chat) => {
        chat.messages.push(msg.id);
        chat.save().then((chat) => res.json(chat));
      });
    });
  }
}

module.exports = new MessageController();
