module.exports = function (app) {
    require("./users.routes")(app);
    require("./tasks.routes")(app);
}