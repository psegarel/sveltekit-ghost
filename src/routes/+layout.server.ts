import type { LayoutServerLoad } from './$types';
import { contentApi } from '$lib/ghost';

export const load = (async () => {
	const { title, description } = await contentApi.settings.browse();
	const pages = await contentApi.pages.browse();
	const posts = await contentApi.posts.browse({ limit: 3, include: ['authors'] });

	return {
		settings: { title, description },
		pages,
		posts
	};
}) satisfies LayoutServerLoad;
