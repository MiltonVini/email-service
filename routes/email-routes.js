const router = require('express').Router()
const sendEmailController = require('../controllers/email-controller')

router.post('/emails', sendEmailController.sendEmail)

module.exports = {
    EmailRoutes: router
}