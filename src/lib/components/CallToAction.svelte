<script>
	export let key = {};
</script>

{#if key === 'Contact'}
	<section class="quote-section">
		<p class="container">
			<a href="/contact">Contact us</a> today to find out how we can help you. Your first consultation is free.
		</p>
	</section>
{:else if key === 'Blog'}
	<section class="quote-section">
		<p class="container">
			<a href="/blog">Read our blog</a> for an introduction and quick tips on various areas of the law.
		</p>
	</section>
{/if}
