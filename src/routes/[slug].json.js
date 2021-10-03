import { getCollectionItem } from '$lib/collections.js';

export async function get({ params }) {
	const pageDetails = await getCollectionItem('pages', params.slug);

	return {
		body: pageDetails
	};
}
