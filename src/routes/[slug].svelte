<script context="module">
	import { loadPage } from '$lib/routing.js';

	export async function load({ page, fetch }) {
		return await loadPage(`/${page.params.slug}.json`, { fetch });
	}
</script>

<script>
	import PageLayout from '$lib/layouts/PageLayout.svelte';

	export let pageDetails = {};
</script>

<PageLayout pageDetails={pageDetails} />
