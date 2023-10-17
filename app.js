const express = require('express')
const app = express()
const port = process.env.PORT || 3000

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
                    <p><cite>-&nbsp;${author}</cite></p>`)
	} catch (err) {
		res.status(500).send('Error fetching the quote')
	}
})

// Message for successful server launch
app.listen(port, () => {
	console.log(`Server up on port ${port}`)
})
