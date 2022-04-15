
async function main() {
	const https = require('https')
	const options = {
		hostname: '8chan.moe',
		port: 443,
		path: '/b/catalog.json',
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Referer': 'https://8chan.moe/',
		}
	}

	const req = https.request(options, res => {
		console.log(`statusCode: ${res.statusCode}`)

		res.on('data', d => {
			process.stdout.write(d)
		})
	})

	req.on('error', error => {
		console.error(error)
	})

	req.end()
}

main();



