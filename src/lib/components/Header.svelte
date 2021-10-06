<script>
	import companyData from '@content/data/company.json';
	import Navigation from '$lib/components/Navigation.svelte';

	export let pageDetails = {};
</script>

<header style="background-image: url(/uploads/building.jpg)" class="{pageDetails.large_header ? 'main-hero' : ''}">
	<div class="container">
		<h1><a href="/">{companyData.company_name}</a></h1>
		<Navigation {pageDetails} />
	</div>
</header>
