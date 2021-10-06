<script>
	import '$lib/styles/main.scss';
	import companyData from '@content/data/company.json';
	import footerData from '@content/data/footer.json';
	import Icon from '$lib/components/Icon.svelte';
</script>

<slot />

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
							<a href="{link.url}" target="{link.new_window ? '_blank' : '_self'}">
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