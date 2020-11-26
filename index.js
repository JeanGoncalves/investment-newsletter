require('dotenv').config()
const express = require('express')

const sendMail = require('./service/sendMail')
const Cron = require('./service/cronJob')

let app = express()

// sendMail()

let cron = new Cron()
cron.setRecurrence('*/3 * * * * *')
cron.setJob(sendMail)
cron.start()


app.listen(1313)