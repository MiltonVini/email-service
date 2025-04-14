const { Resend } = require('resend')
require('dotenv').config({ path: '../.env' })

const resendApiKey = process.env.RESEND_API_KEY
const resend = new Resend(resendApiKey)

const sendEmail = async (to, subject, message) => {
    try {
        const email = await resend.emails.send({
            from: 'onboarding@resend.dev',
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