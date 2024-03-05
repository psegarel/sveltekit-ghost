import type { LayoutServerLoad } from './$types';
import { contentApi } from '$lib/ghost';

export const load = (async () => {
	const { title, description } = await contentApi.settings.browse();
	return {
		settings: { title, description }
	};
}) satisfies LayoutServerLoad;
