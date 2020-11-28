const axios = require('axios')
const { template } = require('../Service/Mail/template')
const sendMail = require('../Service/Mail/sendMail')

exports.get = async (req, res, next) => {
    try {
        res.status(200).send(sendMail())
    } catch(err) {
        res.status(500).send(err)
    }
    // try{
    //     axios.get("https://statusinvest.com.br/home/mainsearchquery?q=petz")
    //            .then(response => res.status(200).send(response.data))
    //            .catch(err => res.send(err));
    //  }
    //  catch(err){
    //      console.log(err)
    //  }    
}

exports.getTemplate = (req, res, next) => {
    res.status(200).send(template('Jean'))
}