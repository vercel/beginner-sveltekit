<script>
	import GridTile from '$lib/GridTile.svelte';
	let displayedProducts = [
		{
			name: 'Cup',
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Cup-front-black.png?v=1623159405',
			price: '$10.00'
		},
		{
			name: 'Quarter Zip',
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/QZSide-Model.png?v=1623256247',
			price: '$30.00'
		},
		{
			name: 'Sticker',
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Sticker-mock.png?v=1623256356',
			price: '$8.00'
		}
	];
</script>

<div>
	<ul class="grid grid-flow-row gap-4 grid-cols-2 md:grid-cols-3">
		{#each displayedProducts as product, i (product.node.id)}
			<li>
				<div>
					<GridTile {product} />
				</div>
			</li>
		{/each}
	</ul>
</div>
