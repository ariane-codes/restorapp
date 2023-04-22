<script lang="ts">
	import StarRating from "$lib/components/StarRating.svelte";
import type { Review } from "$lib/models/review";


export let review: Review;

</script>

<div class="flex w-full min-h-40 bg-light-80 my-4 p-6">
    <div class="flex flex-col w-1/4 ">
        <span class="mb-2 text-lg">{review.user.name}</span>
        <StarRating rating={review.rating} />
    </div>

    <div class="w-3/4">
        <h2 class="mb-2">{review.title}</h2>
        <span>
            {review.body}
        </span>
    </div>

</div>