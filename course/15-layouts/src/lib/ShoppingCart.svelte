<script>
	import CartItemsStore from '../Store.js';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	let cartItems;
	CartItemsStore.subscribe((data) => {
		cartItems = data;
	});
	function addOne(i) {
		shuffle(i);
		cartItems[i].quantity = cartItems[i].quantity + 1;
	}
	function removeOne(i) {
		shuffle(i);
		cartItems[i].quantity = cartItems[i].quantity - 1;
	}
	let newItem = {
		name: 'T-Shirt',
		src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Front-NoModel_ec3be051-d579-4c03-b55b-64449d0b0445.png?v=1623255893',
		price: '$80.00',
		quantity: 1
	};
	function addItemToCart() {
		CartItemsStore.update((currentData) => {
			return [newItem, ...currentData];
		});
	}
	const shuffle = (i) => {
		var element = cartItems[i];
		cartItems.splice(i, 1);
		cartItems.splice(0, 0, element);
	};
</script>

<div
	transition:fade
	class="z-50 max-h-screen overflow-hidden flex justify-end w-full absolute inset-0 bg-black/50"
>
	<div class="lg:w-1/3 md:w-1/2 w-full bg-black z-50 p-6">
		<div class="mb-6 w-full flex items-center justify-between">
			<div class="text-2xl font-medium">My Cart</div>
			<button on:click class="text-sm uppercase opacity-80 hover:opacity-100">close</button>
		</div>
		<div class="mb-4 bg-zinc-900 px-6 py-1 flex items-center justify-between">
			<div class="relative flex items-center">
				<img src={newItem.src} class="h-10 bg-white mr-2" alt="cup" />
				<p class="uppercase font-medium">{newItem.name}</p>
				<div
					class="absolute top-0 left-0 -ml-4 bg-white text-black font-medium rounded-full px-1 py-px flex items-center justify-center"
					style="font-size: 10px;"
				>
					NEW!
				</div>
			</div>
			<button
				on:click={addItemToCart}
				class="bg-white/90 p-1 text-black uppercase font-medium text-xs"
			>
				Add to Cart
			</button>
		</div>
		{#if cartItems.length === 0}
			<div class="mt-20 w-full flex flex-col items-center justify-center overflow-hidden">
				<div class="w-16 h-16 bg-white rounded-full flex items-center justify-center" />
				<div class="mt-6 text-center font-bold text-2xl">Your cart is empty.</div>
			</div>
		{/if}
		<div class="overflow-y-auto" style="height: 60%;">
			{#each cartItems as item, i (item.name)}
				<div animate:flip>
					<div class="w-full flex mb-2">
						<img class="bg-white flex-none w-20" src={item.src} />
						<div class="flex flex-col justify-between ml-4 w-full">
							<div class="w-full flex justify-between">
								<di>
									<p class="font-medium text-lg">{item.name}</p>
								</di>
								<p class="font-medium">{item.price}</p>
							</div>
						</div>
					</div>
					<div class="flex w-full mb-4">
						<div class="flex w-full h-8 border border-white/40">
							<div class="px-2 h-full flex items-center ">
								{item.quantity}
							</div>
							<button
								on:click={() => {
									removeOne(i);
								}}
								class="ml-auto h-8 w-8 flex items-center justify-center border-l border-white/40 bg-white/0 hover:bg-white/10"
							>
								-
							</button>
							<button
								on:click={() => {
									addOne(i);
								}}
								class="h-8 w-8 flex items-center justify-center border-l border-white/40 bg-white/0 hover:bg-white/10"
							>
								+
							</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
		{#if cartItems.length !== 0}
			<button
				class="flex items-center justify-center uppercase text-sm mt-8 font-medium opacity-90 hover:opacity-100 w-full text-black p-3 bg-white"
			>
				<span>Proceed to Checkout</span>
			</button>
		{/if}
	</div>
</div>
