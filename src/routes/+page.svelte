<script lang="ts">
	import { contentApi } from '$lib/ghost';
	import type { PageData } from './$types';
	export let data: PageData;

	import Hero from '$lib/components/Hero.svelte';
</script>

<Hero settings={data.settings} />
