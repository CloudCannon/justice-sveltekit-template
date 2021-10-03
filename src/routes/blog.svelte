<script context="module">
	import { loadPage } from '$lib/routing.js';

	export async function load({ fetch }) {
		return await loadPage('/blog.json', { fetch });
	}
</script>

<script>
	import PageLayout from '$lib/layouts/PageLayout.svelte';
	import PostSummary from '$lib/PostSummary.svelte';

	export let posts;
	export let pageDetails;
</script>

<PageLayout pageDetails={pageDetails}>
	<ol class="post-list">
		{#each posts as post}
			<PostSummary post={post} />
		{/each}
	</ol>
</PageLayout>
