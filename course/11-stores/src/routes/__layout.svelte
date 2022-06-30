<script>
	import '../app.css';
	import ShoppingCart from '$lib/ShoppingCart.svelte';
	import CartItemsStore from '../Store.js';

	let showCart = false;
	let cartCount = 0;

	$: cartItems = $CartItemsStore;
	$: {
		cartCount = 0;
		cartItems.forEach((item) => {
			cartCount += item.quantity;
		});
	}
	function addItemToCart(event) {
		cartItems = [...cartItems, event.detail.item];
	}
</script>

<div>
	<div>
		<nav class="flex items-center border-b border-zinc-700 p-4 lg:px-6">
			<div class="flex w-full items-center justify-between">
				<div class="mr-4">
					<a href="/" class="">
						<picture>
							<source srcset="/svelte_logo.png" type="image/png" />
							<img src="/svelte_logo.png" alt="Svelte Logo" class="h-8" />
						</picture>
					</a>
				</div>
				<button
					on:click={() => {
						showCart = true;
					}}
					class="uppercase text-white flex items-center"
				>
					<div>Cart</div>
					<div
						class="w-5 h-5 ml-2 text-black bg-white rounded-full flex items-center justify-center text-xs font-bold"
					>
						{cartCount}
					</div>
				</button>
			</div>
		</nav>
	</div>
	<div class="relative">
		{#if showCart}
			<ShoppingCart
				on:click={() => {
					showCart = false;
				}}
				on:addItemToCart={addItemToCart}
			/>
		{/if}
		<slot />
	</div>
</div>
