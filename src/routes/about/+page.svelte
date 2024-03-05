<script lang="ts">
	import type { PostOrPage } from '@tryghost/content-api';
	import type { PageData } from './$types';

	export let data: PageData;
	const about = data.pages.find((page: PostOrPage) => page.slug == 'about');
</script>

<div class="flex w-screen flex-col items-center justify-center py-32">
	{#if about}
		<div class="flex w-2/5 flex-col gap-8">
			<h1 class="text-5xl font-bold">{about.title}</h1>
			{@html about.html}
		</div>
	{/if}
</div>

<style>
	h3 {
		font-weight: bold;
	}
</style>
