import { error } from '@sveltejs/kit';
export async function load({ params, fetch }) {
	try {
		const data = await fetch(`/product/${params.name}`).then((r) => r.json());
		if (data) {
			return { product: data };
		}
	} catch (err) {
		throw error(500, `Could not load url`);
	}
}
