import { writable } from 'svelte/store';

const CartItemsStore = writable([
    {name: 'Sticker', src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Sticker-mock.png?v=1623256356', price: '$8.00', quantity: 1},
    {name: 'Cup', src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Cup-front-black.png?v=1623159405', price: '$10.00', quantity: 1},
    {name: 'Jacket', src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/bomber-jacket-0.png?v=1622902777', price: '$80.00', quantity: 1},
]);

export default CartItemsStore;