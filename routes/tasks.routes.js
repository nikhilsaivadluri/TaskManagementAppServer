module.exports = function (app) {
    const taskController = require('../controllers/tasks.controller');
    const authMiddleware = require('../middlewares/authMiddleware');
    app.route('/api/tasks').get(authMiddleware.authenticateUser,taskController.getTasks);
    app.route('/api/tasks/:taskId').get(authMiddleware.authenticateUser,taskController.getTaskDetails);
    app.route('/api/tasks').post(authMiddleware.authenticateUser,taskController.createTask)
    app.route('/api/tasks/:taskId').put(authMiddleware.authenticateUser,taskController.updateTask)
    app.route('/api/tasks/:taskId').delete(authMiddleware.authenticateUser,taskController.deleteTask);
}