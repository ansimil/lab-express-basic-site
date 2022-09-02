const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
	console.log(`Listening on port ${port}`)

    })

// https://www.npmjs.com/package/nodemon

// this line is needed to register the public folder and send
// it to the client
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
	// console.log('this is the home route')
	// res.send('<h1>This is the Home Page 🐵</h1>')
	//console.log(__dirname)
	res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (req, res) => {
	res.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (req, res) => {
	res.sendFile(__dirname + '/views/works.html')
})

