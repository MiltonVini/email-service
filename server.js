const { app } = require('./app')

const port = 3000

app.listen(port, () => {
    console.log(`HTTP server running on port ${port}`)
})