const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

const BASE_URL = 'http://20.244.56.144/test/companies';

app.get('/categories/:categoryname/products', async (req, res) => {
    const { categoryname } = req.params;
    const { n, minPrice, maxPrice, sort, order, page } = req.query;

    if (!n || isNaN(n)) {
        return res.status(400).json({ error: "Parameter 'n' must be a valid number" });
    }

    const companies = ["AMZ", "FUP", "SNP", "MYN", "AZO"];

    try {
        const products = (await Promise.all(companies.map(async company => {
            const url = `${BASE_URL}/${company}/categories/${categoryname}/products?top=${n}&minPrice=${minPrice || 0}&maxPrice=${maxPrice || 100000}`;
            const response = await axios.get(url);
            return response.data.map(product => ({
                ...product,
                id: `${company}-${product.productName}-${product.price}`,
                company
            }));
        }))).flat();

        if (sort) {
            products.sort((a, b) => {
                if (order === 'desc') {
                    return b[sort] - a[sort];
                }
                return a[sort] - b[sort];
            });
        }

        const itemsPerPage = Math.min(parseInt(n), 10);
        const pageNum = page ? parseInt(page) : 1;
        const paginatedProducts = products.slice((pageNum - 1) * itemsPerPage, pageNum * itemsPerPage);

        res.json(paginatedProducts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve products' });
    }
});

app.get('/categories/:categoryname/products/:productid', async (req, res) => {
    const { categoryname, productid } = req.params;

    const companies = ["AMZ", "FUP", "SNP", "MYN", "AZO"];

    try {
        const productDetails = await Promise.any(companies.map(async company => {
            const url = `${BASE_URL}/${company}/categories/${categoryname}/products?top=100&minPrice=0&maxPrice=100000`;
            const response = await axios.get(url);
            const product = response.data.find(p => `${company}-${p.productName}-${p.price}` === productid);
            return product ? { ...product, company } : null;
        }));

        if (productDetails) {
            res.json(productDetails);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve product details' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
