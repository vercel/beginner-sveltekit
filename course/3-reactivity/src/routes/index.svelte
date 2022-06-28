<script>
	let quantity = 0;
	function addToCart() {
		inventory = [...inventory, quantity];
		quantity = ++quantity;
		user.name = 'Lee';
	}
	let inventory = [1, 2, 3];
	let user = { name: 'Steph' };
	$: remaining = 10 - quantity;
	let price = 5;
	$: totalCost = quantity * price;
	function increasePrice() {
		price = price + 2;
	}
	$: if (quantity >= 10) {
		console.log(`the quantity is ${quantity}`);
		alert(`The total cost is ${totalCost}`);
	}
</script>

<h1>Your shopping cart has {quantity} items.</h1>
<button on:click={addToCart}> Add To Cart </button>
<h2>{inventory}</h2>
<h3>{user.name}</h3>
<div>Remaining Inventory: {remaining}</div>
<div>Item Price: {price}</div>
<button on:click={increasePrice}> Increase Price </button>
<div>Total Cost: {totalCost}</div>
