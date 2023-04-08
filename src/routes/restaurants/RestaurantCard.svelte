<script lang="ts">
	import type { Restaurant } from "$lib/models";
    import { Star } from "lucide-svelte";

    export let restaurant: Restaurant;

</script>

<div class="w-full rounded-2xl m-3 flex bg-slate-50">
    <div class="w-3/4 flex flex-col">
        <!-- Contents -->
        <div class="bg-primary-110 rounded-tl-2xl text-white font-bold h-14 flex items-center">
            <span class="pl-5">
                {restaurant.name}
            </span>
        </div>
        <div class="h-full md:columns-2 gap-0">
            
            <div class="flex items-center justify-center py-3 px-2">
                {#if restaurant.rating}
                    {#each Array(restaurant.rating) as _}
                        <Star class="text-accent-100 fill-accent-100"/>
                    {/each}
                    {#each Array(5 - restaurant.rating) as _}
                        <Star class="text-accent-100 text-xs"/>
                    {/each}
                    <span class="text-sm">{`${restaurant.reviewCount} review${restaurant.reviewCount === 1 ? "" : "s"}`}</span>
                {:else}
                    {#each Array(5) as _}
                        <Star class="text-gray-200 fill-gray-200" />
                    {/each}
                    <span class="text-sm">No reviews yet.</span>
                    
                {/if}
            </div>
        </div>
    </div>
    <div class="w-1/4 overflow-clip rounded-r-2xl ">
        <img
        class="h-full w-full "
        alt="Restaurant"
        src={restaurant.imageUrl ?? "https://via.placeholder.com/150"}
        />

    </div>
</div>