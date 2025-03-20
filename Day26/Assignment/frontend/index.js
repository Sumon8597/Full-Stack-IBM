document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    });

    console.log(res)

    const data = await res.json();
    console.log(data)
    alert(data.message);
    window.location.href = "login.html"
});

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    console.log(data)
    if (data.token) {
        localStorage.setItem('token', data.token);
        window.location.href = 'dashboard.html';
    } else {
        alert('Login failed');
    }
});


const productContainer = document.getElementById("product-container");
const nextBtn = document.getElementById("next-btn");


let currentPage = 1;
let isLoading = false
// let hasMoreProducts = true;

async function fetchProducts() {
    if (isLoading ) 
        return;

    isLoading = true;
    setTimeout(async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/products?page=${currentPage}`, {
                method: "GET"
            });
            const data = await response.json();

            console.log(data)

            displayProducts(data.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }finally {
            isLoading = false;
        }
    }, 3000)
}


function displayProducts(products) {
    products.forEach((product, index) => {
        let productBox = document.createElement("div");
        productBox.className = "product-box";

        let heading = document.createElement("h3");
        heading.innerText = product.category || "No Category";

        let img = document.createElement("img");
        img.src = product.image || "placeholder.jpg";


        let name = document.createElement("p");
        name.innerText = product.name;

        let price = document.createElement("p");
        price.innerText = `Price: $${product.price}`;

        let rating = document.createElement("p");
        rating.innerText = `Rating: ${product.rating || "N/A"}`;

        let button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.addEventListener("click", () => {
            addToCart(product);
        });

        productBox.append(heading, img, name, price, rating, button);
        productContainer.append(productBox);
    });
}




let Foodcart = [];
function addToCart(el, index) {
    console.log(el, index)
    Foodcart.push(el);
    localStorage.setItem("FoodData", JSON.stringify(Foodcart));

    Toastify({
        text: "Food added to your card",
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        // newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        // onClick: function(){} // Callback after click
    }).showToast();
    //stringify
    //   console.log(Foodcart);
    //   alert("Item added to card...")
    let FoodCart = document.getElementById("FoodCart")
    FoodCart.append(Foodcart);
}
function goToCart() {
    window.location.href = "Foodcart.html";
}
// products.sort((a,b)=>{
//   if(a.price<b.price){
//     return-1;
//   }
//   if(a.price>b.price){
//     return 1;
//   }
//   return 0;
// })



// nextBtn.addEventListener("click", () => {
//     currentPage++;
//     fetchProducts();
// });

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= window.document.body.offsetHeight - 30) {
        fetchProducts();
    }
})


fetchProducts();

// function handlescroll(){
//     if(window.innerHeight+window.scrollY)
// }

// function sckeleton(arr){
// arr.forEach((el,index)=>{

//     let box=document.createElement("div");
//     box.className="skalBox";
// })
// }

    let loader = document.querySelector('.skeleton')
    // let container = document.querySelector('.container')
    setTimeout(() => {
        loader.style.display = "none";
        // container.style.display = "block";
    }, 5000)
