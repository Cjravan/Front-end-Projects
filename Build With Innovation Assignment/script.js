// Add your JavaScript code here

// Function to handle login
function login() {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
      })
    })
    .then(res => res.json())
    .then(data => {
      const authToken = data.token;
      if (authToken) {
        // Save the token
        localStorage.setItem('authToken', authToken);
  
        // Show the home section
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('home-section').style.display = 'block';
  
        // Fetch products
        fetchProducts(authToken);
      } else {
        console.log('Login failed');
      }
    })
    .catch(error => {
      console.error('Login error:', error);
    });
  }
  
  // Function to fetch products
  function fetchProducts(authToken) {
    fetch('https://dummyjson.com/products', {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    })
    .then(res => res.json())
    .then(products => {
      // Display products
      displayProducts(products);
    })
    .catch(error => {
      console.error('Fetch products error:', error);
    });
  }
  
  // Function to display products
  function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear existing content
  
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
      `;
      productList.appendChild(productCard);
    });
  }
  
  // Function to handle adding to cart
  function addToCart(productId, productName, productPrice) {
    // Add your logic to update the cart and display count and total
    console.log('Added to cart:', productName, productPrice);
  }