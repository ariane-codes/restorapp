<script lang="ts">
	import Icon from "./Icon.svelte";
    export let iconName: string = "Star"
    export let color: string = "accent";
    export let score: number | undefined = undefined;
    export let size: string = "2";
</script>

<div class="relative flex flex-col w-fit">
    <div class="flex justify-center">
        {#each Array(5) as _, i}
            {#if !score}
                <Icon name={iconName} class={`text-light-120  h-[${size}rem] w-[${size}rem]`}/>
            {:else}
            
                {#if score > i}
                    <Icon name={iconName} class={`text-${color}-100 fill-${color}-100 h-[${size}rem] w-[${size}rem]`}/>
                {:else}
                    <Icon name={iconName} class={`text-light-120 fill-light-120 h-[${size}rem] w-[${size}rem]`}/>
                {/if}
            {/if}
        {/each}
    
    </div>
    <input type="range" class="absolute inset-0 grow opacity-0 cursor-pointer" step="1" bind:value={score} on:change
    min={0} max={5}
    />
</div>
