<script context="module">
	import { loadPage } from '$lib/routing.js';

	export async function load({ page, fetch }) {
		return await loadPage(`/${page.params.slug}.json`, { fetch });
	}
</script>

<script>
	import { onDestroy, onMount } from 'svelte';
 	import { onCloudCannonChanges, stopCloudCannonChanges } from '@cloudcannon/svelte-connector';
	import Page from '$lib/components/Page.svelte';

	export let pageDetails = {};

	onMount(async () => {
   		onCloudCannonChanges((newProps) => pageDetails = newProps);
 	});

 	onDestroy(async () => {
  		stopCloudCannonChanges();
 	});
</script>

<Page pageDetails={pageDetails} />
