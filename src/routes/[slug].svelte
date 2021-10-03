<script context="module">
	// export async function load({ page, fetch, stuff }) {
	export async function load({ stuff }) {
		console.log('stuff', stuff);
		return {
			props: {
				pageDetails: stuff.pageDetails
			}
		};

		// const url = `/${page.params.slug}.json`;
		// const res = await fetch(url);

		// if (res.ok) {
		// 	return { props: await res.json() };
		// }

		// return {
		// 	status: res.status,
		// 	error: new Error(`Could not load ${url}`)
		// };
	}
</script>

<script>
	import Page from '$lib/Page.svelte';

	export let pageDetails = {};
</script>

<Page pageDetails={pageDetails} />
