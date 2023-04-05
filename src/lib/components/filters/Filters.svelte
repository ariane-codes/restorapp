<script lang="ts">

    import type { IFiltersState } from "./IFiltersState";
	import MapListButton from "./MapListButton.svelte";

    export const filtersState: IFiltersState = {
        layout: "list"
    };

</script>

<div class="flex flex-col px-5 py-5 items-center w-full"> 
    
    <MapListButton />

</div>