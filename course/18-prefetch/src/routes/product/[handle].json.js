const products = [
	{
		name: 'cup',
		price: '$10',
		quantity: 1,
		src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Cup-front-black.png?v=1623159405',
		description: 'This is a cup.'
	},
	{
		name: 'shirt',
		price: '$10',
		quantity: 1,
		src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/short-sleeve-t-shirt-0.png?v=1622902418',
		description: 'This is a shirt.'
	},
	{
		name: 'jacket',
		src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/bomber-jacket-0.png?v=1622902777',
		price: '$80.00',
		quantity: 1,
		description: 'This is a jacket.'
	},
	{
		name: 'sticker',
		src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Sticker-mock.png?v=1623256356',
		price: '$8.00',
		quantity: 1,
		description: 'This is a sticker.'
	}
]
export async function get({ params }) {
	let product = products.find(product => product.name === params.handle)

	return {
		body: {product}
	};
}