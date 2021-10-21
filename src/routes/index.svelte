<script context="module">
	import { loadPage } from '$lib/routing.js';

	export async function load({ fetch }) {
		return await loadPage('/index.json', { fetch });
	}
</script>

<script>
	import { onDestroy, onMount } from 'svelte';
 	import { onCloudCannonChanges, stopCloudCannonChanges } from '@cloudcannon/svelte-connector';
	import Page from '$lib/components/Page.svelte';

	export let pageDetails;

	onMount(async () => {
   		onCloudCannonChanges((newProps) => pageDetails = newProps);
 	});

 	onDestroy(async () => {
  		stopCloudCannonChanges();
 	});
</script>

<Page pageDetails={pageDetails}>
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
</Page>
