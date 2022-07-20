<script>
	export let product = {
		title: 'No product provided',
		src: 'https://img.icons8.com/ios/500/no-image.png',
		cost: '$0'
	};
</script>

<div class="h-[50vh] w-full bg-indigo-600 overflow-hidden">
	<div class="relative flex h-full w-full items-center justify-center">
		<img
			src={product.src}
			class="max-h-full flex-none transition duration-300 ease-in-out"
			alt=""
		/>
		<div class="text-white absolute top-0 left-0">
			<div class="bg-black p-3 text-2xl  font-medium">{product.title}</div>
			<div class="w-fit bg-black p-3 text-sm">{product.cost}</div>
		</div>
	</div>
</div>
