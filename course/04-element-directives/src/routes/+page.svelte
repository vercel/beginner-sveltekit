<script>
	function handleClick(event) {
		console.log(event);
	}
	let searchedValue = '';
	let checked = false;
</script>

<div>{checked}</div>
<input type="checkbox" bind:checked />
<div>
	{searchedValue}
</div>
<input type="text" id="myText" bind:value={searchedValue} />
<button
	on:click|self={() => {
		alert('Click has been handled');
	}}
>
	Click Me!
</button>
<div on:mousemove={handleClick} style="background: LawnGreen; padding: 20px;">
	Mousemove in green logged n console
	<div style="background: OrangeRed; padding: 20px;">Mousemove not logged for red</div>
</div>
