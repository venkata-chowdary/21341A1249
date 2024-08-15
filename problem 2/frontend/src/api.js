const products = [
    // Sample product data
    {
        id: 1,
        name: 'Product A',
        company: 'Company A',
        category: 'Category 1',
        price: 100,
        rating: 4.5,
        discount: 10,
        availability: true,
        image: 'https://via.placeholder.com/150',
    },
    // Add more products here...
];

export const fetchProducts = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const fetchProductById = async (id) => {
    const product = products.find((product) => product.id === id);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product);
        }, 1000);
    });
};
