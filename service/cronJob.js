const cron = require('node-cron')

/**
 * [ DEFAULT ]
 * 
 * Configuração de recorrência para ser executado a cada segundo
 */
const recurrence = '* * * * * *'

/**
 * [ DEFAULT ]
 * 
 * Executa o job default
 */
const cronJob = (str = 'Job Default executado.') => {
    return console.log(getDateNow(), `- ${str}`)
}

/**
 * Retorna a data e hora atual
 */
const getDateNow = () => {
    const date = new Date()
    return date.toUTCString()
}

class Cron {
    constructor() {
        console.log(getDateNow(), '- Init Cron instance')
        this.recurrence = recurrence
        this.cronJob = cronJob
    }

    setRecurrence(recurrence) {
        this.recurrence = recurrence
    }

    setJob (fn) {
        this.cronJob = () => {
            cronJob('Job customizado executado')
            fn()
        }
    }
    
    start () {
        console.log(getDateNow(), '- Start Cron job')
        cron.schedule(this.recurrence, this.cronJob)
    }
}

module.exports = Cron