const nodemailer = require('nodemailer')

const remetente = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    service: '',
    port: process.env.MAIL_PORT,
    secure: false,
    logger: true,
    // debug: true,
    // ignoreTLS: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
})
const date = new Date()

const emailSend = {
    from: 'jeanfpgoncalves@live.com',
    to: 'jeanfpgoncalves@live.com',
    subject: 'Enviando email com nodejs',
    html: `<span>Esse e-mail foi enviado por um servidor local com node.js</span><br/><span>Horário de envio: <b>${date.toUTCString()}</b></span>`
}

const sendMail = () => {
    console.log('Enviando e-mail no arquivo de service')

    remetente.sendMail(emailSend, function(err) {
        if (err) {
            console.log(`Error on send mail: ${err}`)
        } else {
            console.log('Email enviado com sucesso')
        }
    })
}

module.exports = sendMail