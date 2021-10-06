<script>
	export let pageDetails = {};
</script>

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
