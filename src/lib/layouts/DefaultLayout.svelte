<script>
	import companyData from '../../../content/data/company.json';
	import footerData from '../../../content/data/footer.json';
	import Icon from '../Icon.svelte';

	export let pageDetails = {};
</script>

<svelte:head>
	<title>{pageDetails.title}</title>
</svelte:head>

<header style="background-image: url(/uploads/building.jpg)" class="{pageDetails.large_header ? 'main-hero' : ''}">
	<div class="container">
		<h1><a href="/">{companyData.company_name}</a></h1>
		<nav>
			<ul>
				<li>
					<a href="/about" class="{pageDetails.slug === 'about' ? 'active' : ''}">About</a>
				</li>
				<li>
					<a href="/services" class="{pageDetails.slug === 'services' ? 'active' : ''}">Services</a>
				</li>
				<li>
					<a href="/contact" class="{pageDetails.slug === 'contact' ? 'active' : ''}">Contact</a>
				</li>
				<li>
					<a href="/blog" class="{pageDetails.slug === 'blog' ? 'active' : ''}">Blog</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<section class="main">
	<div class="container"><slot /></div>
</section>

{#if pageDetails.call_to_action === 'Contact'}
	<section class="quote-section">
		<p class="container">
			<a href="/contact">Contact us</a> today to find out how we can help you. Your first consultation is free.
		</p>
	</section>
{:else if pageDetails.call_to_action === 'Blog'}
	<section class="quote-section">
		<p class="container">
			<a href="/blog">Read our blog</a> for an introduction and quick tips on various areas of the law.
		</p>
	</section>
{/if}

<footer>
	<div class="container">
		<div class="footer-columns" data-cms-editor-link="cloudcannon:collections/content/data/footer.json">
			{#each footerData as column}
				<ul class="footer-links">
					<li>
						<h2>{column.title}</h2>
					</li>

					{#each column.links as link}
						<li>
							<a href="{link.link}" target="{link.new_window ? '_blank' : '_self'}">
								{#if link.social_icon}
									<Icon icon={link.social_icon} />
								{/if}

								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			{/each}

			<ul class="footer-links">
				<li>
					<h2>{companyData.company_name}</h2>
				</li>
				<li>{companyData.description}</li>
				<li>
					<a href="/feed.xml"><Icon icon="RSS" /> Subscribe with RSS</a>
				</li>
			</ul>
		</div>
	</div>

	<div class="legal-line">
		<p class="container">
			&copy; {new Date().getFullYear()} {companyData.company_name} &bull; <a href="/terms">Terms</a> &bull; Template by <a href="https://cloudcannon.com/">CloudCannon</a>
		</p>
	</div>
</footer>