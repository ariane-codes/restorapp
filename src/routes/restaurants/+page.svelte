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
         <div class="flex w-full justify-between">
             
            <span>{`${restaurants.length} restaurant${restaurants.length === 1 ? "" : "s"} found`}</span>
            <div>Sort here</div>
     
         </div>

        {#each restaurants as restaurant}
            <RestaurantCard {restaurant} />
        {/each}
     </div>
{/if}


