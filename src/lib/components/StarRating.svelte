<script lang="ts">
    import { Star } from "lucide-svelte";
    export let rating: number | undefined;
    export let showNumber: boolean = false;
    export let emptyStars: boolean = false;
    export let size: string = "12";

    $: console.log(size);
</script>

<div class="flex">
    {#if rating}
    {#each Array(Math.round(rating)) as _}
        <Star class={`text-accent-100 fill-accent-100 w-${size} h-${size}`}/>
    {/each}
    {#each Array(5 - Math.round(rating)) as _}
        <Star class={`${emptyStars ? "text-accent-100" : "text-light-120 fill-light-120" } w-${size} h-${size} `}/>
    {/each}
    {#if showNumber}
    <span class="text-lg ml-3 font-bold">{rating}</span>
    {/if}
    {:else}
        {#each Array(5) as _}
            <Star class="text-gray-200 fill-gray-200" />
        {/each}                    
    {/if}
</div>

