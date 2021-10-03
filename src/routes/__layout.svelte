<script context="module">
	import companyData from '../../content/data/company.json';
	import siteData from '../../content/data/site.json';

	export async function load({ page, fetch }) {
		if (!page.params.slug) {
			return {};
		}

		const url = `/${page.params.slug}.json`;
		const res = await fetch(url);

		if (res.ok) {
			const pageDetails = await res.json();

			return {
				props: {
					pageDetails,
					companyData
				},
				stuff: {
					pageDetails,
					siteData,
					companyData
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	export let pageDetails = {};
	export let companyData = {};
</script>

<svelte:head>
	<title>{pageDetails.title}</title>
</svelte:head>

<header style={{ backgroundImage: 'url(/uploads/building.jpg)'}} class={pageDetails.large_header ? 'main-hero' : ''}>
	<div class="container">
		<h1><a href="/">{companyData.company_name}</a></h1>
		<nav>
			<ul>
				<li>
					<a href="/about" class={pageDetails.slug === 'about' ? 'active' : ''}>About</a>
				</li>
				<li>
					<a href="/services" class={pageDetails.slug === 'services' ? 'active' : ''}>Services</a>
				</li>
				<li>
					<a href="/contact" class={pageDetails.slug === 'contact' ? 'active' : ''}>Contact</a>
				</li>
				<li>
					<a href="/blog" class={pageDetails.slug === 'blog' ? 'active' : ''}>Blog</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<section class="main">
	<div class="container"><slot /></div>
</section>
