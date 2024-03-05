import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	return {
		slug: params.slug
	};
}) satisfies PageServerLoad;
