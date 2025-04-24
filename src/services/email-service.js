const { Resend } = require('resend')
require('dotenv').config()

const resendApiKey = process.env.RESEND_API_KEY
const emailDomain = process.env.EMAIL_DOMAIN
const resend = new Resend(resendApiKey)

const sendEmail = async (to, subject, message) => {
    try {
        const email = await resend.emails.send({
            from: emailDomain,
            to: to,
            subject: subject,
            html: message
          })

        return email
    } catch (error) {
        console.error(error)
    }
}


module.exports = { sendEmail }