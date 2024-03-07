<script lang="ts">
	import type { PostOrPage } from '@tryghost/content-api';
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils';
	import User from '$lib/components/heroicons/User.svelte';

	export let data: PageData;

	$: post = data.posts.find((post: PostOrPage) => post.slug == data.slug);
</script>

{#if post}
	<div class="flex min-h-screen w-screen flex-col items-center justify-center">
		<div class="flex flex-col gap-8 p-4 py-32 lg:w-3/5">
			<h1 class="text-xl font-bold lg:text-4xl">{post.title}</h1>
			<div class="flex flex-row gap-4">
				<User classname="size-12 border rounded-full bg-zinc-200 text-white p-1" />
				<div>
					{#if post.authors}
						<h4 class="text-sm font-semibold lg:text-xl">{post.authors[0].name}</h4>
					{/if}
					{#if post.created_at}
						<div class="text-xs text-zinc-500 lg:text-sm">{formatDate(post.created_at)}</div>
					{/if}
				</div>
			</div>
			<img src={post?.feature_image} alt={post.title} />
			<div class="text-base font-light lg:text-lg">{@html post.html}</div>
		</div>
	</div>
{/if}
