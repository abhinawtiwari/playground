const https = require('https')
const url = 'https://api.darksky.net/forecast/2da4211d48ca38474db9c6188f4e8507/45,-70';

const request = https.request(url, (response) => {
    let data = ''
    
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()