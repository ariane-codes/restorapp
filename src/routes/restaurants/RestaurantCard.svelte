<script lang="ts">
    import Chip, { Set, Text } from '@smui/chips';
	import { Tags, type Restaurant } from "$lib/models";
    import { ChefHat, Star } from "lucide-svelte";

    export let restaurant: Restaurant;

</script>

<a href={`/restaurants/${restaurant.id}`} class="pb-3 px-3">
<div class="w-full rounded-2xl  flex h-48 drop-shadow-sm hover:drop-shadow-xl transition">

        <div class="w-3/4 flex flex-col">
            <!-- Contents -->
            <div class="bg-primary-110 rounded-tl-2xl text-white font-bold h-14 flex items-center">
                <span class="pl-5">
                    {restaurant.name}
                </span>
            </div>
            <div class="h-full md:columns-2 gap-0 flex items-center justify-center px-5 bg-slate-50 rounded-bl-2xl">
                
                <!-- Column 1 -->
                <div class="w-full flex flex-col md:items-start items-center">
                    <div class="flex items-center justify-center py-3 px-2">
                        {#if restaurant.rating}
                            {#each Array(Math.round(restaurant.rating)) as _}
                                <Star class="text-accent-100 fill-accent-100"/>
                            {/each}
                            {#each Array(5 - Math.round(restaurant.rating)) as _}
                                <Star class="text-accent-100 text-xs"/>
                            {/each}
                            <span class="text-sm">{`(${restaurant.reviewCount})`}</span>
                        {:else}
                            {#each Array(5) as _}
                                <Star class="text-gray-200 fill-gray-200" />
                            {/each}                    
                        {/if}
                    </div>
    
                    <div class="flex items-center justify-center flex-wrap">
                        <Set chips={restaurant.tags} let:chip nonInteractive>
                            <Chip {chip} class="capitalize text-sm">
                                <Text>{Tags[chip]}</Text>
                            </Chip>
                        </Set>
                    </div>
    
                </div>
    
                <!-- Column 2 -->
                <div class="w-full flex flex-col md:items-start items-center md:p-2">
                    <div class="my-2">
                        {#if restaurant.categories}
                            <span class="capitalize text-center flex items-center inter text-lg">
                                <ChefHat class="mr-2"/>
                                {#each restaurant.categories as category, index}
                                    {category}
                                    {#if index < restaurant.categories.length - 1}
                                    {"• "}
                                    {/if}
                                {/each}
                            </span>
                        {:else}
                            <span>No categories</span>
                        {/if}
                    </div>
                    <div class="my-2">
                        {#if restaurant.price}
                            {#each Array(Math.floor(restaurant.price)) as _}
                                <span>€</span>
                            {/each}
                        {:else}
                            <span>No price</span>
                        {/if}
                    </div>
                </div>
                
                
            </div>
        </div>
        <div class="w-1/4 overflow-clip rounded-r-2xl
        bg-origin-border bg-center bg-no-repeat bg-cover"
        style={`background-image: url(${restaurant.imageUrl});`}/>
    </div>
</a>

<style lang="scss">
    a:focus, a:hover, a:link, a:visited {
        text-decoration: none;
        color: inherit;
    }

</style>