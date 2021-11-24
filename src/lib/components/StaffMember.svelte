<script>
	import companyData from '@content/data/company.json';

	export let staffMember = {};
</script>

<li class="staff">
	<div class="staff-details">
		<div class="staff-image">
			<img
				src={staffMember.image}
				alt={`Staff photo for ${staffMember.name}`}
				width="120"
				height="120" />
		</div>
		<ul class="staff-info">
			<li>{staffMember.name}</li>
			<li><small>{staffMember.credentials}</small></li>
			<li>
				<a href={`tel:${companyData.phone}`}>{companyData.phone}</a> ext {staffMember.phone_extension}
			</li>
		</ul>
	</div>

	<div class="staff-bio">
		{@html staffMember.content_html}
	</div>
</li>
