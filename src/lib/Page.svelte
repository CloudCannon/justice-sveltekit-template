<script>
	export let pageDetails = {};
</script>

<div class="page-header">
	<h2>{pageDetails.title}</h2>
</div>

<article class="content">
	<div>{@html pageDetails.content_html}</div>
	<slot />
</article>