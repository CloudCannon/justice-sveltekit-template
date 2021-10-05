<script>
	import DefaultLayout from './DefaultLayout.svelte';
	import PostSummaryDetails from '../PostSummaryDetails.svelte';
	import StaffMember from '../StaffMember.svelte';

	export let pageDetails = {};
	export let author;
</script>

<DefaultLayout pageDetails={pageDetails}>
	{#if pageDetails.title}
		<div class="page-header">
			<h2>{pageDetails.title}</h2>
		</div>
	{/if}

	<article class="content">
		<PostSummaryDetails post={pageDetails} />
		<div>{@html pageDetails.content_html}</div>

		{#if author}
			<h2>Meet the author</h2>
			<ul class="post-author staff-list">
				<StaffMember staffMember={author} />
			</ul>
		{/if}
	</article>
</DefaultLayout>
