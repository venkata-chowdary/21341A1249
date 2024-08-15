const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Base URL for the test server APIs
const BASE_URL = 'http://20.244.56.144/test/companies';

// Get top N laptops for the specified company
app.get('/categories/laptops', async (req, res) => {
    const { top = 10, minPrice = 1, maxPrice = 10000 } = req.query; // Default values

    try {
        const response = await axios.get(`${BASE_URL}/AMZ/categories/Laptop/products`, {
            params: {
                top,
                minPrice,
                maxPrice
            },
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzNjk5MDQ0LCJpYXQiOjE3MjM2OTg3NDQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQxY2Y0MTFiLTAzN2MtNDVkYy04ZWMwLTEyMzQ1NGZlZThjOCIsInN1YiI6ImNob3dkYXJ5aW1tYW5uaUBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJBRkZPUkRNRUQiLCJjbGllbnRJRCI6ImQxY2Y0MTFiLTAzN2MtNDVkYy04ZWMwLTEyMzQ1NGZlZThjOCIsImNsaWVudFNlY3JldCI6IkhrSm5XRGx6WEtXUldvSmUiLCJvd25lck5hbWUiOiJWZW5rYXQgSW1tYW5uaSIsIm93bmVyRW1haWwiOiJjaG93ZGFyeWltbWFubmlAZ21haWwuY29tIiwicm9sbE5vIjoiMjEzNDFBMTI0OSJ9.7yOZQLYs31mrOuOByD1N3CR-z5g_kan53HfEmtjVRCY'
            }
        });

        // Log the products to the console
        console.log(response.data);

        // Send the response back to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'An error occurred while fetching products.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
