<script lang="ts">
    import MediaQuery from "svelte-media-queries";
    import FiltersSidebar from './FiltersSidebar.svelte';
	import { filtersStore, type IFiltersStore } from "$lib/stores/filtersStore";
	import { onDestroy } from "svelte";
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { browser } from "$app/environment";

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

<div class="flex w-full justify-center">
    <div class=" w-full max-w-[1400px] flex">
        <MediaQuery query="(max-width:480px)" let:matches>
            {#if !matches}
                <FiltersSidebar />
            {/if}
        </MediaQuery>
        <slot/>
    </div>
</div>
