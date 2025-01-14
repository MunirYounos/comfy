import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {
    const form = getElement('.input-form');
    const searchInput = getElement('.search-input');
    form.addEventListener('keyup', function(){
        const value = searchInput.value;
        if(value){
            const newStore = store.filter((filteredProduct) =>{
                let { name } = filteredProduct;
                name = name.toLowerCase();
                if(name.startsWith(value)){
                    return filteredProduct;
                }
            })
            display(newStore, getElement('.products-container'), true);
            if(newStore.length < 1) {
                const products = getElement('.products-container');
                products.innerHTML = `<h3 class="filter-error">Sorry, no products matched your search.</h3>`
            }
        } else{
            display(store, getElement('.products-container'));
        }
    })
};

export default setupSearch;
