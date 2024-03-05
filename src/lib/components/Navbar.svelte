<script lang="ts">
	import type { PostOrPage, PostsOrPages } from '@tryghost/content-api';
	import type { PageData } from '../../routes/$types';

	export let data: PageData;
	const settings = data.settings;
	let pages = data.pages.map((page: PostOrPage) => {
		return { url: `/${page.slug}`, name: page.slug };
	});
	pages = [{ url: '/', name: 'home' }, ...pages];
</script>

<div class="flex h-28 w-screen flex-row items-center p-4 lg:px-48">
	<div class="w-1/3">
		<ul class="flex flex-row items-center gap-8">
			{#each pages as item}
				<li><a class="capitalize" href={item.url}>{item.name}</a></li>
			{/each}
		</ul>
	</div>
	<div class="flex w-1/3 flex-row items-center justify-center text-2xl font-semibold">
		{settings.title}
	</div>
	<!-- <div class="w-1/3 text-2xl font-semibold"></div> -->
</div>
