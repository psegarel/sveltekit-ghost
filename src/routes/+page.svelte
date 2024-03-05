<script lang="ts">
	import { contentApi } from '$lib/ghost';
	import type { PageData } from './$types';
	export let data: PageData;

	import Hero from '$lib/components/Hero.svelte';
	import PostThumb from '$lib/components/PostThumb.svelte';
</script>

<Hero settings={data.settings} />
<div class="flex w-screen flex-row items-center justify-center p-4">
	<div class="py-8 lg:w-2/4">
		<h3 class="border-b pb-3 text-sm font-light uppercase">Latest</h3>

		{#each data.posts as post}
			<PostThumb {post} />
		{/each}
	</div>
</div>
