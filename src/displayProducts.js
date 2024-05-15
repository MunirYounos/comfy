import { formatPrice } from './utils.js';
import { addToCart } from './cart/setupCart.js';
const display = (featured, element, filters) => {
   // display products
   element.innerHTML = featured.map((feature) =>{
    const { id, name, price, image } = feature; 
    return `
        <article class="product">
        <div class="product-container">
        <img src="${image}" alt="${name}" class="product-img img"/>
        <div class="product-icons">
            <a href="product.html?id=${id}" class="product-icon">
            <i class="fas fa-search"></i>
            </a>
            <button class="product-cart-btn product-icon" data-id="${id}">
            <i class="fas fa-shopping-cart"></i>
            </button>
        </div>
        </div>
        <footer>
        <p class="product-name">${name}</p>
        <h4 class="product-price">$${formatPrice(price) }</h4>
        </footer>
    </article> 
    `
   }).join('');

if(filters) return;
   element.addEventListener('click', function(e){
    const parentElem = e.target.parentElement;
    if(parentElem.classList.contains('product-cart-btn')){
        addToCart(parentElem.dataset.id);
    }
   })
}

export default display;
