<script>
	import GridTile from '$lib/GridTile.svelte';
	import Modal from '$lib/Modal.svelte';
	import { page } from '$app/stores';
	let showModal = false;
	let product = {};
	let products = [
		{
			name: 'cup',
			price: '$10',
			quantity: 1,
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Cup-front-black.png?v=1623159405',
			description: 'This is a really good cup. You should buy it.'
		},
		{
			name: 'sticker',
			price: '$8',
			quantity: 1,
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Sticker-mock.png?v=1623256356',
			description: 'This is a really nice sticker. You should buy it.'
		},
		{
			name: 't-shirt',
			price: '$40',
			quantity: 1,
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Front-NoModel_ec3be051-d579-4c03-b55b-64449d0b0445.png?v=1623255893',
			description: 'This is a really soft t-shirt. You should buy it.'
		}
	];
	$: {
		product = products.find((product) => product.name === $page.params.name);
	}
</script>

<div>
	{#if showModal}
		<Modal
			on:click={() => {
				showModal = false;
			}}
		>
			<span slot="header">
				<div class="text-center font-bold uppercase mb-4">This item is on sale!</div>
			</span>
			<span slot="body">
				<div class="mb-4">
					{product.name} is on sale! It is only {product.price}
				</div>
			</span>
			<span slot="button">
				<button
					on:click={() => {
						showModal = false;
					}}
					class="bg-pink-500 text-white uppercase font-medium p-2 rounded-md">Awesome!</button
				>
			</span>
		</Modal>
	{/if}
	<div class="flex md:flex-row flex-col">
		<div class="md:w-2/3 md:h-90">
			<div class="relative h-4/5 bg-violet-700">
				<GridTile {product} />
			</div>
		</div>
		<div class="md:w-1/3 h-full p-6 text-xl">
			<p class="">{product.description}</p>
			<button class="text-base uppercase font-medium w-full bg-white text-black mt-6 p-2">
				Add To Cart
			</button>
		</div>
	</div>
</div>
