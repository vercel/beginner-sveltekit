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
	You can click the green.
	<div style="background: OrangeRed; padding: 20px;">You can't click the red</div>
</div>
