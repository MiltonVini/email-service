const sendEmailService = require('../services/email-service')

const sendEmail = async (req, res) => {
    const { to, subject, message } = req.body

    const email = await sendEmailService.sendEmail(to, subject, message)

    res.json({
        message: 'Email send succefully',
        email: email
    })
}

module.exports = { 
    sendEmail
}