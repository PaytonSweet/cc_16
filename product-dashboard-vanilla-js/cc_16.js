// Task 2
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

// calls function
fetchProductsThen();