<script context="module">
	import { loadPage } from '$lib/routing.js';
	import siteData from '@content/data/site.json'

	export async function load({ page, fetch }) {
		return await loadPage(`/blog/${page.params.slug}.json`, { fetch });
	}
</script>

<script>
	import { onDestroy, onMount } from 'svelte';
 	import { onCloudCannonChanges, stopCloudCannonChanges } from '@cloudcannon/svelte-connector';
	import Page from '$lib/components/Page.svelte';
	import PostSummaryDetails from '$lib/components/PostSummaryDetails.svelte';
	import StaffMember from '$lib/components/StaffMember.svelte';

	export let pageDetails = {};
	export let author = {};

	onMount(async () => {
   		onCloudCannonChanges((newProps) => pageDetails = newProps);
 	});

 	onDestroy(async () => {
  		stopCloudCannonChanges();
 	});
</script>

<Page pageDetails={pageDetails}>
	<PostSummaryDetails post={pageDetails} slot="content-start" />

	{#if author}
		<h2>Meet the author</h2>
		<ul class="post-author staff-list">
			<StaffMember staffMember={author} />
		</ul>
	{/if}
</Page>
