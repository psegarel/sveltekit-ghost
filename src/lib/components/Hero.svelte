<script lang="ts">
	export let settings: { title: string | undefined; description: string | undefined };
</script>

<div
	class="flex h-[55vh] w-screen flex-col items-center justify-center bg-gradient-to-r from-indigo-900 via-30% to-fuchsia-800"
>
	{#if settings.description}
		<h1 class="text-2xl font-bold text-white lg:text-5xl">{settings.description}</h1>
	{/if}
</div>
