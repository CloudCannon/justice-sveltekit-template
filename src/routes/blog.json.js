import { getCollectionItem, getCollection } from '$lib/collections.js';

export async function get() {
	const pageDetails = await getCollectionItem('pages', 'blog');
	const postsWithoutAuthor = await getCollection('posts', { excerpt: true, sortKey: 'date' });
	const posts = await Promise.all(postsWithoutAuthor.map(async (post) => {
		const author = await getCollectionItem('staff-members', post.author_staff_member);
		return { ...post, author };
	}));

	return {
		body: {
			pageDetails,
			posts
		}
	};
}
