const MailController = require('../Controllers/MailController')

module.exports = (app) => {
    app.get('/email', MailController.get)
    app.get('/email/template', MailController.getTemplate)
}