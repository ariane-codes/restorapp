<script lang="ts">
	import { Tags, type Restaurant } from "$lib/models";
    import { ChefHat, Banknote, Tag } from "lucide-svelte";
    import Chip, { Set, Text } from '@smui/chips';
	import Button from "$lib/components/button/Button.svelte";

    export let restaurant: Restaurant;
    export let showLeaveReviewButton: boolean = false;
</script>

<div class="flex flex-col w-full px-14">
    {#if showLeaveReviewButton}
    <div class="my-3 mb-10 w-full">
        <Button label="Leave a review" color="primary" width="100%" title="Leave a review"/>
    </div>
    {/if}

    {#if restaurant.categories && restaurant.categories.length > 0}
        <div class="flex items-center text-xl">
            <ChefHat class="mr-3"/>
            <strong>Categories</strong>
        </div>
        <div class="capitalize mt-2 text-lg">
            {#each restaurant.categories as category, index}
                {category}
                {#if index < restaurant.categories.length - 1}
                {"• "}
                {/if}
            {/each}
        </div>
    {/if}

    {#if restaurant.price}
        <div class="flex items-center text-xl mt-5">
            <Banknote class="mr-3"/>
            <strong>Price</strong>
        </div>
        <div class="capitalize mt-2 text-lg flex">
            <div class="font-bold">
                {#each Array(Math.floor(restaurant.price)) as _}
                    €
                {/each}
            </div>
            <div class="text-dark-60">
                {#each Array((Math.floor(restaurant.price) - 5)*-1) as _}
                    €
                {/each}
            </div>
        </div>
    {/if}

    {#if restaurant.tags}
        <div class="flex items-center text-xl mt-5">
            <Tag class="mr-3"/>
            <strong>Tags</strong>
        </div>
        <div class="flex items-center mt-2 flex-wrap">
            <Set chips={restaurant.tags} let:chip nonInteractive>
                <Chip {chip} class="capitalize text-sm">
                    <Text>{Tags[chip]}</Text>
                </Chip>
            </Set>
        </div>
    {/if}

</div>
