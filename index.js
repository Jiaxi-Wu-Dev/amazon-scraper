const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = '407a5e997e19b3ef0379c36661f3a5d6'
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Amazon Scraper API');

})

//Get Product Details
app.get('/products/:productId', async(req, res) => {
    const { productId } = req.params 

    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`)

        res.json(response);
    } catch(error){
        res.json(error);
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

 