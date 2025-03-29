// Task 2: Fetch Products with .then()
// sets api to a const
const BASE_URL = "https://www.course-api.com/javascript-store-products";

function fetchProductsThen() { // function used to find product names
    fetch(BASE_URL) // fetches url
    .then(response => {
        if (!response.ok) { // checks if response is ok
        throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
    })
    .then((products) => {
        console.log("Product Names:"); 
        products.forEach((product) => console.log(product.fields.name)); // logs product names
    })
    .catch((error) => { // catches all errors
        console.error("Error fetching products:", error); // logs errors found
        throw error;
    });
}

// Task 3: Fetch Products with async/await
async function fetchProductsAsync() { // fetches products using async
    try {
        const response = await fetch(BASE_URL); // waits before fetching url
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`); // shows error if one is there
        }
        const products = await response.json();
        displayProducts(products); // displays product using function
    } catch (error) {
        handleError(error); // logs errors using function
    }
}

function displayProducts(products) { // function to display products
    console.log("Displaying products:", products);
}

function handleError(error) { // function to log errors
    console.error("Error fetching products:", error);
}



// calls function
fetchProductsThen();