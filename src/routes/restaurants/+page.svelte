<script lang="ts">
    import type { PageData } from './$types';
    import type { Restaurant } from '$lib/models';
    import Empty from "$lib/components/Empty.svelte";
	import RestaurantCard from './RestaurantCard.svelte';
    
    export let data: PageData;

    $: restaurants = data.restaurants as Restaurant[];

</script>

{#if restaurants.length === 0}
    <div class="flex flex-col justify-center items-center grow">
        <Empty/>
        No restaurants found.
    </div>
    
{:else}
     <div class="flex flex-col items-center w-full px-4">
        <div class="flex w-full justify-between my-2 mb-3">
            
        <span class="font-bold text-lg">{`${restaurants.length} restaurant${restaurants.length === 1 ? "" : "s"} found`}</span>
        <!-- <div>Sort here</div> -->
    
        </div>

        <div class="overflow-auto w-full h-full gap-3">
            {#each restaurants as restaurant}
                {#each Array(10) as _ }
                    
                <RestaurantCard {restaurant} />
                {/each}
            {/each}

        </div>
     </div>
{/if}


