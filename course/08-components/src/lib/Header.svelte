<script>
	import { page } from '$app/stores';
	$: currentRoute = $page.url.pathname;
</script>

<nav class="flex items-center border-b border-zinc-700 p-4 lg:px-6">
	<div class="flex w-1/3 items-center">
		<div class="mr-4" class:active={currentRoute === '/'}>
			<a href="/" class="">
				<picture>
					<source srcset="/svelte_logo.png" type="image/png" />
					<img src="/svelte_logo.png" alt="Svelte Logo" class="h-8" />
				</picture>
			</a>
		</div>
	</div>
</nav>
