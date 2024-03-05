# create-svelte

A Svelte project starter, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte) and [Ghost](https://ghost.org/) as a headless CMS

As expected
```
npm install
```

You will need a Ghost blog
### Start for free with [DigitalPress](https://www.digitalpress.blog/)

Add the necessary API Keys in order for SvelteKit to communicate with Ghost

### Check the docs [Ghost Content API](https://ghost.org/docs/content-api/)
Obtain the Content API URL and key by creating a new Custom Integration under the Integrations screen in Ghost Admin.

### Add the keys to a .env file:
```
VITE_GHOST_API_URL=[API URL]
VITE_GHOST_CONTENT_API_KEY=[Content API Key]
VITE_SECRET_GHOST_ADMIN_API_KEY=[Admin API Key]
```

Check the basic implementation, this repo basically 
(SvelteKit site)(https://sveltekit-ghost.vercel.app/)

The DigitalPress blog 
(Ghost Blog)(https://sveltekit-ghost.digitalpress.blog/)

