<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import type { PageData } from './$types';
	import '../app.pcss';

	export let data: PageData;
</script>

<Navbar settings={data.settings} />
<slot />
