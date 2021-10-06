<script>
	export let post = {};

	$: date = post.date ? new Date(post.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}) : '';
</script>

<p class="post-summary-details">
	{date}

	{#each post.tags as tag}
		<span class="post-summary-category"> &bull; {tag}</span>
	{/each}
</p>
