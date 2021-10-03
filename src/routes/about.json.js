import { getCollectionItem, getCollection } from '$lib/collections.js';

export async function get() {
	const pageDetails = await getCollectionItem('pages', 'about');
	const staffMembers = await getCollection('staff-members');

	return {
		body: {
			pageDetails,
			staffMembers
		}
	};
}
