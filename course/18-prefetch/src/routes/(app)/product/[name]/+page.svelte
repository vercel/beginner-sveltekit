<script>
	import GridTile from '$lib/GridTile.svelte';
	import Modal from '$lib/Modal.svelte';

	export let data;
	$: ({ product } = data);
	let showModal = false;
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
