<script lang="ts">
	export let settings: { title: string | undefined; description: string | undefined };
</script>

<div class="flex h-[50vh] w-screen flex-col items-center justify-center bg-indigo-800">
	{#if settings.description}
		<h1 class="text-5xl font-bold text-white">{settings.description}</h1>
	{/if}
</div>
