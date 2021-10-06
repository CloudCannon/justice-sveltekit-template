<script>
	import { onMount } from 'svelte';
	import { dev, browser } from '$app/env';
	import siteData from '@content/data/site.json';

	onMount(() => {
		if (browser && !dev && siteData.google_analytics_key) {
			// eslint-disable-next-line no-undef
			window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
			// eslint-disable-next-line no-undef
			ga('create', siteData.google_analytics_key, 'auto');
			// eslint-disable-next-line no-undef
			ga('send', 'pageview');
		}
	});
</script>

<svelte:head>
	{#if siteData.google_analytics_key}
		<script async src="https://www.google-analytics.com/analytics.js"></script>
	{/if}
</svelte:head>
