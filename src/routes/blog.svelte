<script context="module">
	import { loadPage } from '$lib/routing.js';

	export async function load({ fetch }) {
		return await loadPage('/blog.json', { fetch });
	}
</script>

<script>
	import { onDestroy, onMount } from 'svelte';
 	import { onCloudCannonChanges, stopCloudCannonChanges } from '@cloudcannon/svelte-connector';
	import Page from '$lib/components/Page.svelte';
	import PostSummary from '$lib/components/PostSummary.svelte';

	export let posts;
	export let pageDetails;

	onMount(async () => {
   		onCloudCannonChanges((newProps) => pageDetails = newProps);
 	});

 	onDestroy(async () => {
  		stopCloudCannonChanges();
 	});
</script>

<Page pageDetails={pageDetails}>
	<ol class="post-list">
		{#each posts as post}
			<PostSummary post={post} />
		{/each}
	</ol>
</Page>
