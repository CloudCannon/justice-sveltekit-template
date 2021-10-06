<script>
	import seoData from '@content/data/seo.json';
	import companyData from '@content/data/company.json';
	import Header from '$lib/components/Header.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';

	export let pageDetails = {};

	$: title = pageDetails.title ? `${pageDetails.title} | ${seoData.site_title}` : seoData.site_title;
	$: description = pageDetails.description || seoData.description;
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="alternate" type="application/rss+xml" title="{companyData.company_name}" href="/feed.xml" />
	<link rel="sitemap" type="application/xml" title="{companyData.company_name} - Sitemap" href="/sitemap.xml" />
</svelte:head>

<Header {pageDetails} />

<section class="main">
	<div class="container">
		{#if pageDetails.title}
			<div class="page-header">
				<h2>{pageDetails.title}</h2>
			</div>
		{/if}

		<article class="content">
			<slot name="content-start" />
			<div>{@html pageDetails.content_html}</div>
			<slot />
		</article>
	</div>
</section>

<CallToAction key={pageDetails.call_to_action} />
