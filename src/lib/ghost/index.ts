// src/lib/ghost/index.ts
import GhostContentAPI from '@tryghost/content-api';

export const contentApi = new GhostContentAPI({
	url: import.meta.env.VITE_GHOST_API_URL,
	key: import.meta.env.VITE_GHOST_CONTENT_API_KEY,
	version: 'v5.0'
});
