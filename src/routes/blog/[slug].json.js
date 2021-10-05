import { getCollectionItem } from '$lib/collections.js';

export async function get({ params }) {
	const pageDetails = await getCollectionItem('posts', params.slug);
	const author = await getCollectionItem('staff-members', pageDetails.author_staff_member);

	return {
		body: { pageDetails, author }
	};
}
