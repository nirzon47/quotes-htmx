// Initializing express
const express = require('express')
const app = express()

// Setting a port to the server
const port = process.env.PORT || 3000

// Sets the static assets directory to the public folder
app.use(express.static('public'))

// Initial page render
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

// Gets quote
app.get('/getRandomQuote', async (req, res) => {
	try {
		const response = await fetch('https://api.quotable.io/quotes/random')
		const data = await response.json()
		const quote = data[0].content
		const author = data[0].author

		res.set('Content-Type', 'text/html')
		res.send(`<quote>${quote}</quote>
					<br />
                    <p><cite>-&nbsp;${author}</cite></p>`)
	} catch (err) {
		res.status(500).send('Error fetching the quote')
	}
})

// Message for successful server launch
app.listen(port, () => {
	console.log(`Server up on port ${port}`)
})

// Exports the app so we can use it elsewhere
export default app
