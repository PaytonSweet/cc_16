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

// Task 4: Display the Products (updating displayProducts function)
function displayProducts(products) { // function to display products
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // ensures html is clear
    
    products.slice(0,5).forEach(product => { // selects first 5 products
        const productElement = document.createElement("div");
        productElement.classList.add("product-item");

        //displays each products name, price, and image
        productElement.innerHTML = `<h2>${product.fields.name}</h2> 
        <p>Price: $${product.fields.price}</p>
        <img src="${product.fields.image[0].url}" alt="${product.fields.name}"/>`;

        // appends them to container
        container.appendChild(productElement);
    });
}

function handleError(error) { // function to log errors
    console.error("Error fetching products:", error);
}



// calls function
fetchProductsThen();