<script context="module">
	export async function load({ fetch, stuff }) {
		console.log('stuff', stuff);

		const url = '/about.json';
		const res = await fetch(url);

		if (res.ok) {
			return { props: await res.json() };
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import Page from '$lib/Page.svelte';

	export let staffMembers;
	export let pageDetails;
</script>

<Page pageDetails={pageDetails}>
	<p>Meet the members of our capable team:</p>

	<ul class="staff-list">
		{#each staffMembers as staffMember}
			<li>{staffMember.name}</li>
			<!-- <StaffMember staffMember={staffMember} /> -->
		{/each}
	</ul>
</Page>
