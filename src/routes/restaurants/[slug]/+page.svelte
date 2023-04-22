<script lang="ts">
    import type { PageData } from './$types';
    import { ChefHat, Star } from "lucide-svelte";
	import ReviewCard from './ReviewCard.svelte';
	import StarRating from '$lib/components/StarRating.svelte';

    export let data: PageData;

    const { restaurant, reviews } = data;

</script>

<div class="flex w-full h-full flex-col px-5">

    <div class=" overflow-clip w-full h-1/2
        bg-origin-border bg-center bg-no-repeat bg-cover"
        style={`background-image: url(${restaurant.imageUrl});`}/>

    <div class="grid grid-cols-5 mt-16 gap-3">

        <!-- Restaurant name and reviews -->
        <div class="col-span-3">

            <div class="grid grid-cols-3">
                <h1 class="text-primary-100 col-span-2 text-5xl">{restaurant.name}</h1>
                <div class="flex items-center justify-start py-3 px-2 ">
                    <StarRating rating={restaurant.rating} showNumber />
                </div>
            </div>

            <div class="mt-10 text-2xl">{`${restaurant.reviewCount} people have shared what they think`}</div>
            
            {#if reviews.length === 0}
                <div>
                    No reviews yet. Be the first to share your experience!
                </div>
            {:else}
                {#each reviews as review}
                    <ReviewCard {review}/>
                {/each}
            {/if}


        </div>

        <!-- Restaurant info + leave review button -->
        <div class="col-span-2">
            Leave a review
        </div>

    </div>
    

</div>