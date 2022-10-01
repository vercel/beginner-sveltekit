<script>
	let product = {
		name: 't-shirt',
		quantity: 0
	};
	function increment() {
		product.quantity += 1;
	}
	let products = [
		{ name: 't-shirt', quantity: 10 },
		{ name: 'mug', quantity: 30 },
		{ name: 'sticker', quantity: 8 },
		{ name: 'sweatshirt', quantity: 12 }
	];
	function addProduct() {
		let cup = { name: 'cup', quantity: 4 };
		products = [cup, ...products];
	}
</script>

<button on:click={increment}>Increment</button>
{#if product.quantity > 10}
	<div style="background: LightGreen; padding: 4px;">This product is in stock</div>
{:else if product.quantity === 0}
	<div style="background: LightCoral; padding: 4px;">This item is out of stock.</div>
{:else}
	<div style="background: LemonChiffon; padding: 4px;">Only a few items left in stock!</div>
{/if}
<h1>Current {product.name} Quantity: {product.quantity}</h1>
<button on:click={addProduct}> Add Product </button>
{#each products as product, i (product.name)}
	<div>{product.name}</div>
	<div>Index: {i}</div>
	<input type="checkbox" />
{/each}

<style lang="scss">
	div {
		background-color: orange;
	}
	div {
		h3 {
			color: rgb(255, 255, 255);
		}
	}
</style>
