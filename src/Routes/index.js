const MainRoute = require('./MainRoute')
const MailRoute = require('./MailRoute')

module.exports = (app) => {
    MainRoute(app)
    MailRoute(app)
}