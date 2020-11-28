const MainController = require('../Controllers/MainController')

module.exports = (app) => {
    app.get('/', MainController.get)
}