<script>
	let hover = false;
</script>

<div
	on:click|self
	class="bg-black/60 p-8 flex justify-center items-start z-50 w-full h-screen absolute inset-0"
>
	<div
		class="p-8 bg-white w-full md:w-1/2 rounded-md flex flex-col items-center justify-center text-black "
	>
		{#if $$slots.header}
			<div class="p-2 bg-purple-100 mb-6 pt-6 w-full">
				<slot name="header" />
			</div>
		{/if}
		<slot name="body">
			<p class="text-center mb-6">Sorry, something must have gone wrong.</p>
		</slot>
		<div
			on:mouseenter={() => {
				hover = true;
			}}
			on:mouseleave={() => {
				hover = false;
			}}
		>
			<slot name="button" {hover}>
				<button on:click class="bg-black text-white uppercase font-medium text-white p-2 rounded-md"
					>Close</button
				>
			</slot>
		</div>
	</div>
</div>
