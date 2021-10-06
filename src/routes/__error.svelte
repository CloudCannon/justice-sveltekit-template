<script context="module">
	import { loadPage } from '$lib/routing.js';

	export async function load({ fetch }) {
		return await loadPage('/404.json', { fetch });
	}
</script>

<script>
	import Page from '$lib/components/Page.svelte';

	export let pageDetails;
</script>

<Page pageDetails={pageDetails} />
