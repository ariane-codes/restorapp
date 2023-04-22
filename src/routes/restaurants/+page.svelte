<script lang="ts">
    import MediaQuery from "svelte-media-queries";
    import FiltersSidebar from './FiltersSidebar.svelte';
    import type { PageData } from './$types';
    import type { Restaurant } from '$lib/models';
    import Empty from "$lib/components/Empty.svelte";
	import RestaurantCard from './RestaurantCard.svelte';
    import { filtersStore, type IFiltersStore } from "$lib/stores/filtersStore";
	import { onDestroy } from "svelte";
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { browser } from "$app/environment";
    
    export let data: PageData;

    $: restaurants = data.restaurants as Restaurant[];

    const updateQueryParams = (filters: IFiltersStore) => {
        let searchParams = $page.url.searchParams;
        if(filters.checkedCategories.length === 0) {
            searchParams.delete("categories");
        } else {
            searchParams.set("categories", filters.checkedCategories.join(","));
        }
        if(filters.checkedTags.length === 0) {
            searchParams.delete("tags");
        } else {
            searchParams.set("tags", filters.checkedTags.join(","));
        }
        if(filters.checkedPrice.length === 0) {
            searchParams.delete("price");
        } else {
            searchParams.set("price", filters.checkedPrice.join(","));
        }
        if(filters.checkedRating.length === 0) {
            searchParams.delete("rating");
        } else {
            searchParams.set("rating", filters.checkedRating.join(","));
        }
        if (browser) {
            goto(`/restaurants?${searchParams.toString()}`, { invalidateAll: true });
        }
    }

    const unsubscribe = filtersStore.subscribe(filters => {
        if (filters.mounted) { // only run if it's mounted, don't wanna undo the sync with the UI
            updateQueryParams(filters);
        }
    });

    onDestroy(() => unsubscribe());


</script>


<MediaQuery query="(max-width:480px)" let:matches>
    {#if !matches}
        <FiltersSidebar />
    {/if}
</MediaQuery>
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

        <div class="w-full h-full gap-3">
            {#each restaurants as restaurant}
                <RestaurantCard {restaurant} />
            {/each}

        </div>
    </div>
{/if}

