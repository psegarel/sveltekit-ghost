<script lang="ts">
	import type { PostOrPage } from '@tryghost/content-api';
	import { formatDate, truncateString } from '$lib/utils';

	export let post: PostOrPage;

	let excerpt: string;
	if (post.excerpt) {
		excerpt = truncateString(post.excerpt, 180);
	}

	let formattedDate: string;
	if (post.created_at) {
		formattedDate = formatDate(post.created_at);
	}
</script>

<a class="text-zinc-900 no-underline" href={`/${post.slug}`}>
	<div class="flex w-full flex-col gap-4 py-8 lg:grid lg:grid-cols-4">
		<img src={post.feature_image} alt="" />
		<div class="col-span-3 flex flex-col gap-3">
			<h3 class="text-lg font-semibold">{post.title}</h3>
			{#if excerpt}
				<p class="text-sm font-light">{excerpt}</p>
			{/if}
			{#if post.authors}
				{#each post.authors as author}
					<span class="text-xs text-zinc-500">By {author.name} - {formattedDate}</span>
				{/each}
			{/if}
		</div>
	</div>
</a>
