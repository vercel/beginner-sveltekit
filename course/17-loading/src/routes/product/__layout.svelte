<script>
	import CollectionCard from '$lib/CollectionCard.svelte';
	import { setContext } from 'svelte';
	let newItems = [
		{
			name: 'Graphic T',
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Front-NoModel_ec3be051-d579-4c03-b55b-64449d0b0445.png?v=1623255893',
			price: '$60.00'
		},
		{
			name: 'Jacket',
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/bomber-jacket-0.png?v=1622902777',
			price: '$80.00'
		}
	];
	setContext('newItemsContext', newItems);
</script>

<slot />
<div class="pb-40">
	<CollectionCard />
</div>
