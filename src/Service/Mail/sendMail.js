const nodemailer = require('nodemailer')
const { template } = require('./template')

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    // logger: true,
    // debug: true,
    // ignoreTLS: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
})

const options = {
    from: 'jeanfpgoncalves@live.com',
    to: 'jeanfpgoncalves@live.com',
    subject: 'Enviando email com nodejs',
    html: template('Jean testando o envio de email')
}

const sendMail = () => {
    console.log('Enviando e-mail no arquivo de service')

    transporter.verify((err, success) => {
        if (err) console.error(err);
        console.log('Your config is correct');
    });

    transporter.sendMail(options, function(err) {
        if (err) {
            return `Error on send mail: ${err}`
        } else {
            return 'Email enviado com sucesso'
        }
    })
}

module.exports = sendMail