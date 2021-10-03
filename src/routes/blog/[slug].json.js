import { getCollectionItem } from '$lib/collections.js';

export async function get({ params }) {
	const pageDetails = await getCollectionItem('posts', params.slug);

	return {
		body: { pageDetails }
	};
}
