module.exports = function (app) {
    const userController = require('../controllers/users.controller');
    app.route('/api/user/login').post(userController.login);
}