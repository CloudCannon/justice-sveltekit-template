<script>
	import { page } from '$app/stores';
	import { links } from '@content/data/navigation.json'
</script>

<nav>
	<ul>
		{#each links as link}
			<li><a class="{$page.path === link.url ? 'active' : ''}" href="{link.url}">{link.name}</a></li>
		{/each}
	</ul>
</nav>
