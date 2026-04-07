export const hamburger = document.getElementById("hamburger");
export const navLinks = document.getElementById("navLinks");
 let adds = document.querySelectorAll(".add");
 let subtracts = document.querySelectorAll(".subtract");
 let quantities = document.querySelectorAll(".quantity");
let html = "";
export let cartMarkets = [];
export let products = [{
    id: 1,
    name: 'Black Adidas Ultra Sneakers',
    price: 2564,
    img: 'images/black1.jpeg'
},
{ id: 2,
  name: 'Blue Nike Sneakers',
  price: 2022,
  img: 'images/blue1.jpeg'
},
{ id:3,
  name: 'White Nike Airforce 1',
  price: 1736,
  img: 'images/white1.jpeg'
},
{ id:4,
  name: 'Green & White Vans Sneakers',
  price: 2540,
  img: 'images/green1.jpeg'
},
{   id:5,
    name: 'Red,Black & White Nike Sneakers',
    price:3722,
    img: 'images/red1.jpeg'
},{ id:6,
    name: 'White Nike Air Sneakers',
    price:1922,
    img: 'images/white2.jpeg'
},
{   id:7,
    name: 'Orange Nike Air Max Sneakers',
    price:1833,
    img:'images/orange1.jpeg'
},{id:8,
    name: 'Brown Nike Venom Sneakers',
    price:1922,
    img: 'images/brown1.jpeg'
},{id:9,
    name: 'White Nike Asherkine Sneakers',
    price:1799,
    img: 'images/white3.jpeg'
},{id:10,
    name: 'Neon Colored New Balance Sneakers',
    price:1922,
    img: 'images/violet1.jpeg'
},{id:11,
    name: 'White,Black & Yellow Nike Sneakers',
    price: 1922,
    img: 'images/white4.avif'
},{ id:12,
    name: 'Multi-Colored Nike Sneakers',
    price:1322,
    img: 'https://images.unsplash.com/photo-1704900264242-717c2eab3cbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8'
}]

hamburger.addEventListener("click", function () {
navLinks.classList.toggle("active");
});

products.forEach((product) => {
    html += ` 
            <div class="sneaks fade-section">
                    <img src="${product.img}" alt="Black Sneaker">
                    <p class="price">$${Number(product.price)/100}</p>
                <div class="quantity-controls">
                    <button class="add">+</button>
                    <p class="quantity">1</p>
                    <button class="subtract">-</button>
                </div>
                <div class="naming">
                        ${product.name}
                        <p class="problem">Added</p>
                </div>
                    <button class="buy" data-product-id="${product.id}">
                    Buy Now</button>
            </div>
        `  })

 document.getElementById("shop-filler").innerHTML = html;

/*
document.querySelectorAll(".buy").forEach((button)=> {
    button.addEventListener("click",function(){
        const productId = button.dataset.productId;
        
        let matchingItem;

        cartMarkets.forEach((market)=> {
           if (productId === market.productId) {
            matchingItem = market;
           }
        });

        if (matchingItem){
            matchingItem.quantity += 1;
        }else{
        cartMarkets.push({
            productId: productId, 
            quantity:1
        })
    }
        let cartQuantity = 0;

        cartMarkets.forEach((market) => {
            cartQuantity += market.quantity;
        })

        document.getElementById("span").textContent = cartQuantity;
    })
    })
*/

 document.getElementById("shop-filler").addEventListener("click", (e) => {

  // ➕ ADD
  if (e.target.classList.contains("add")) {
    const container = e.target.closest(".quantity-controls");
    const quantity = container.querySelector(".quantity");
    quantity.textContent = Number(quantity.textContent) + 1;
  }

  // ➖ SUBTRACT
  if (e.target.classList.contains("subtract")) {
    const container = e.target.closest(".quantity-controls");
    const quantity = container.querySelector(".quantity");

    let current = Number(quantity.textContent);
    if (current > 1) {
      quantity.textContent = current - 1;
    }
  }

  // 🛒 BUY
  if (e.target.classList.contains("buy")) {
    const button = e.target;
    const productId = Number(button.dataset.productId);

    const parent = button.closest(".sneaks");
    const quantity = Number(parent.querySelector(".quantity").textContent);

    let existing = cartMarkets.find(item => item.productId === productId);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cartMarkets.push({ productId, quantity });
    }

    let total = 0;
    cartMarkets.forEach(item => total += item.quantity);

    document.getElementById("span").textContent = total;

    const problem = parent.querySelector(".problem");

    problem.style.display = "block";

    setTimeout(() => {
         problem.style.display = "none";
    }, 2000);
  }
});

const faders = document.querySelectorAll('.fade-section');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

