<script>
	import SvelteSeo from 'svelte-seo';
	import siteData from '@content/data/site.json';
	import seoData from '@content/data/seo.json';
	import companyData from '@content/data/company.json';
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import GoogleAnalytics from '$lib/components/GoogleAnalytics.svelte';

	export let pageDetails = {};

	$: title = pageDetails.title ? `${pageDetails.title} | ${seoData.site_title}` : seoData.site_title;
	$: description = pageDetails.description || seoData.description;
	$: canonical = `${siteData.url}/${$page.path}`.replace(/\/+/g, '/');

	const images = seoData.images.map((image) => ({
		url: image.image,
		width: image.height,
		height: image.width,
		alt: image.description
	}));
</script>

<SvelteSeo
	title={title}
	canonical={canonical}
	description={description}
	openGraph={{
		site_name: seoData.site_name,
		url: siteData.url,
		title: title,
		description: description,
		images: images
	}}
/>

<GoogleAnalytics />

<svelte:head>
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

			{#if pageDetails.content_html}
				<div>{@html pageDetails.content_html}</div>
			{/if}

			<slot />
		</article>
	</div>
</section>

<CallToAction key={pageDetails.call_to_action} />
