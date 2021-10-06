<script context="module">
	import { loadPage } from '$lib/routing.js';

	export async function load({ page, fetch }) {
		return await loadPage(`/${page.params.slug}.json`, { fetch });
	}
</script>

<script>
	import Page from '$lib/components/Page.svelte';

	export let pageDetails = {};
</script>

<Page pageDetails={pageDetails} />
