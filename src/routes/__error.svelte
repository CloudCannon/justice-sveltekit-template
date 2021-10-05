<script context="module">
	import { loadPage } from '$lib/routing.js';

	export async function load({ fetch }) {
		return await loadPage('/404.json', { fetch });
	}
</script>

<script>
	import PageLayout from '$lib/layouts/PageLayout.svelte';

	export let pageDetails;
</script>

<PageLayout pageDetails={pageDetails} />
