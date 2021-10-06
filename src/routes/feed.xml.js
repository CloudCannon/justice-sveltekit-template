import { getCollection } from '$lib/collections.js';
import siteData from '@content/data/site.json';
import seoData from '@content/data/seo.json';

const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
	<channel>
		<title><![CDATA[${seoData.site_title}]]></title>
		<link>${siteData.url}</link>
		<description><![CDATA[${seoData.description}]]></description>
		<atom:link href="${siteData.url}rss.xml" rel="self" type="application/rss+xml" />
		<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
		${posts.map((post) => `
		<item>
			<title><![CDATA[${post.title || ''}]]></title>
			<description><![CDATA[${post.description || post.excerpt_html || ''}]]></description>
			<link>${siteData.url}blog/${post.slug}</link>
			<guid isPermaLink="true">${siteData.url}blog/${post.slug}</guid>
			<pubDate>${new Date(post.date).toUTCString()}</pubDate>
		</item>`).join('\n')}
	</channel>
</rss>`;

export async function get() {
	const posts = await getCollection('posts', { excerpt: true, sortKey: 'date' });
	return { body: render(posts) };
}
