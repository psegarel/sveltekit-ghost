<script lang="ts">
	import type { PostOrPage } from '@tryghost/content-api';
	import type { PageData } from '../../routes/$types';
	import Burger from './heroicons/Burger.svelte';

	import { navigating } from '$app/stores';
	import { fly } from 'svelte/transition';

	let sliderVisible = true;
	const unsubscribe = navigating.subscribe((value) => {
		if (sliderVisible && !value) {
			sliderVisible = !sliderVisible;
		}
	});

	export let data: PageData;
	const settings = data.settings;
	let pages = data.pages.map((page: PostOrPage) => {
		return { url: `/${page.slug}`, name: page.slug };
	});
	pages = [{ url: '/', name: 'home' }, ...pages];

	function toggleVisible() {
		sliderVisible = true;
	}
</script>

<div class="absolute right-4 top-4 z-40">
	<button on:click={toggleVisible}>
		<Burger />
	</button>
</div>
<div class="relative z-30 flex h-28 w-screen flex-row items-center p-4 lg:px-48">
	<div class="hidden w-1/3 lg:block">
		<ul class="flex flex-row items-center gap-8">
			{#each pages as item}
				<li>
					<a class="font-semibold capitalize text-zinc-900 no-underline" href={item.url}
						>{item.name}</a
					>
				</li>
			{/each}
		</ul>
	</div>
	<div class="flex w-full flex-row items-center justify-center text-2xl font-semibold lg:w-1/3">
		{settings.title}
	</div>
</div>
{#if sliderVisible}
	<div
		transition:fly={{ duration: 500, x: '100vw', opacity: 1 }}
		class="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-white"
	>
		<ul class="flex flex-col items-center gap-8">
			{#each pages as item}
				<li>
					<a class="font-semibold capitalize text-zinc-900 no-underline" href={item.url}
						>{item.name}</a
					>
				</li>
			{/each}
		</ul>
	</div>
{/if}
