<script>
	import PostSummaryDetails from './PostSummaryDetails.svelte';

	export let post = {};
</script>

<li class="post-summary">
	<div class="post-summary-image">
		<img src="{post.image}" alt="Photo of {post.title}" />
	</div>

	<div class="post-summary-content has-post-summary-image">
		<h3 class="post-summary-title">
			<a href="/blog/{post.slug}">{post.title}</a>
		</h3>

		<PostSummaryDetails post={post} />

		<p class="post-summary-author">
			<img
				src="{post.author.image}"
				alt="Photo of {post.author.name}"
				width="30"
				height="30" /> {post.author.name}
		</p>
	</div>

	<p class="post-summary-excerpt">
		{@html post.excerpt_html}
	</p>
</li>
