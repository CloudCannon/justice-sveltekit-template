<script context="module">
	import { loadPage } from '$lib/routing.js';

	export async function load({ fetch }) {
		return await loadPage('/about.json', { fetch });
	}
</script>

<script>
	import { onDestroy, onMount } from 'svelte';
 	import { onCloudCannonChanges, stopCloudCannonChanges } from '@cloudcannon/svelte-connector';
	import Page from '$lib/components/Page.svelte';
	import StaffMember from '$lib/components/StaffMember.svelte';

	export let staffMembers;
	export let pageDetails;

	onMount(async () => {
   		onCloudCannonChanges((newProps) => pageDetails = newProps);
 	});

 	onDestroy(async () => {
  		stopCloudCannonChanges();
 	});
</script>

<Page pageDetails={pageDetails}>
	<p>Meet the members of our capable team:</p>

	<ul class="staff-list">
		{#each staffMembers as staffMember}
			<StaffMember staffMember={staffMember} />
		{/each}
	</ul>
</Page>
