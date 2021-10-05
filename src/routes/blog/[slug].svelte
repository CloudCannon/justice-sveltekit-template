<script context="module">
	import { loadPage } from '$lib/routing.js';

	export async function load({ page, fetch }) {
		return await loadPage(`/blog/${page.params.slug}.json`, { fetch });
	}
</script>

<script>
	import PostLayout from '$lib/layouts/PostLayout.svelte';

	export let pageDetails = {};
	export let author = {};
</script>

<PostLayout pageDetails={pageDetails} author={author} />
