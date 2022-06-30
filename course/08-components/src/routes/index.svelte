<script>
	import GridTile from '$lib/GridTile.svelte';

	let products = [
		{
			title: 'Cup',
			cost: '$10',
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Cup-front-black.png?v=1623159405'
		},
		{
			title: 'Shirt',
			cost: '$10',
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/short-sleeve-t-shirt-0.png?v=1622902418'
		}
	];

	function updateCost() {
		products[0].cost = '$50';
	}
</script>

<button on:click={updateCost} class="text-white bg-pink-500 p-2 my-4">Change Price</button>
{#each products as product}
	<GridTile {product} />
{/each}
<GridTile />
