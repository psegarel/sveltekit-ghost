<script lang="ts">
	import type { PostOrPage } from '@tryghost/content-api';
	import type { PageData } from './$types';

	export let data: PageData;
	const about = data.pages.find((page: PostOrPage) => page.slug == 'about');
</script>

<div class="flex w-screen flex-col items-center justify-center p-4 py-32">
	{#if about}
		<div class="flex flex-col gap-4 lg:w-2/5 lg:gap-8">
			<h1 class="text-2xl font-bold lg:text-5xl">{about.title}</h1>
			{@html about.html}
		</div>
	{/if}
</div>

<style>
	h3 {
		font-weight: bold;
	}
</style>
