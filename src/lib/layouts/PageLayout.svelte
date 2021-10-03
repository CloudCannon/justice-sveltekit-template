<script>
	import DefaultLayout from './DefaultLayout.svelte';

	export let pageDetails = {};
</script>

<DefaultLayout pageDetails={pageDetails}>
	{#if pageDetails.title}
		<div class="page-header">
			<h2>{pageDetails.title}</h2>
		</div>
	{/if}

	<article class="content">
		<div>{@html pageDetails.content_html}</div>
		<slot />
	</article>
</DefaultLayout>
