<script context="module">
	import { loadPage } from '$lib/routing.js';

	export async function load({ fetch }) {
		return await loadPage('/index.json', { fetch });
	}
</script>

<script>
	import PageLayout from '$lib/layouts/PageLayout.svelte';

	export let pageDetails;
</script>

<PageLayout pageDetails={pageDetails}>
	<div class="testimonials">
		{#each pageDetails.testimonials as testimonial}
			<blockquote class="testimonial">
				<p class="testimonial-message">{testimonial.message}</p>
				<p class="testimonial-author">
					<img src={testimonial.testimonial_image} alt={`Photo of ${testimonial.name}`} /> {testimonial.name}
				</p>
			</blockquote>
		{/each}
	</div>
</PageLayout>
