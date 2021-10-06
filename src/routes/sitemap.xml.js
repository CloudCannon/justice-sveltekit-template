import { getCollection } from '$lib/collections.js';
import siteData from '@content/data/site.json';

const render = (posts, pages) => {
	const now = new Date();

	const renderItem = (item, baseUrl) => {
		if (item.sitemap === false) {
			return '';
		}

		const slug = item.slug === 'index' ? '' : `${item.slug}`;

		return `<url>
			<loc>${siteData.url}${baseUrl}${slug}</loc>
			<lastmod>${(item.date ? new Date(item.date) : now).toISOString()}</lastmod>
		</url>`
};

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${posts.map((post) => renderItem(post, 'blog/')).join('\n')}
	${pages.map((page) => renderItem(page, '')).join('\n')}
</urlset>`;
};

export async function get() {
	const posts = await getCollection('posts');
	const pages = await getCollection('pages');
	return { body: render(posts, pages) };
}
