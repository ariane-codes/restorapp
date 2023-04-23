<script lang="ts">
    import type { PageData } from './$types';
	import ReviewCard from './ReviewCard.svelte';
	import StarRating from '$lib/components/StarRating.svelte';
	import RestaurantDetails from './RestaurantDetails.svelte';
	import MediaQuery from 'svelte-media-queries';
    import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
    import IconButton, { Icon } from "@smui/icon-button";
    import { ChevronDown, ChevronUp } from 'lucide-svelte';
	import Button from "$lib/components/button/Button.svelte";
    import AddReviewDialog from './AddReviewDialog.svelte';

    export let data: PageData;

    const { restaurant, reviews } = data;

    let isReviewDialogOpen: boolean = false;
    
    const openAddReviewDialog = () => {
        isReviewDialogOpen = true;
    };

</script>

<div class="flex w-full h-full flex-col px-5">

    <AddReviewDialog bind:isOpen={isReviewDialogOpen}/>
    <div class=" overflow-clip w-full h-1/2
        bg-origin-border bg-center bg-no-repeat bg-cover"
        style={`background-image: url(${restaurant.imageUrl});`}/>

    <MediaQuery query="(min-width:768px)" let:matches>

        <div class="mt-16 flex flex-col md:flex-row">
    
            <!-- Restaurant name and reviews -->
            <div class="w-full md:w-3/5 px-5">

                {#if matches}
                <div class="flex w-full flex-col md:flex-row">
                    <h1 class="text-primary-100 md:w-2/3 text-5xl">{restaurant.name}</h1>
                    <div class="flex items-center  md:justify-end py-3 md:px-10 ">
                        <StarRating rating={restaurant.rating} showNumber />
                    </div>
                </div>
                {:else}
                <Accordion>
                    <Panel variant="unelevated">
                        <Header>
                            <div class="flex w-full flex-col md:flex-row">
                                <h1 class="text-primary-100 md:w-2/3 text-5xl">{restaurant.name}</h1>
                                <div class="flex items-center  md:justify-end py-3 md:px-10 ">
                                    <StarRating rating={restaurant.rating} showNumber />
                                </div>
                            </div>
                            <IconButton class="text-primary-100" toggle slot="icon">
                                <Icon class="material-icons" ><ChevronDown/></Icon>
                                <Icon class="material-icons" on><ChevronUp/></Icon>
                            </IconButton>
                        </Header>
                        <Content>
                            <RestaurantDetails {restaurant} {openAddReviewDialog}/>
                        </Content>
                    </Panel>
                </Accordion>
                <div class="my-3 mb-10 w-full">
                    <Button label="Leave a review" color="primary" width="100%" title="Leave a review"
                    on:click={openAddReviewDialog}/>
                </div>
                {/if}

    
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
            {#if matches}
                <div class="w-2/5">
                    <RestaurantDetails {restaurant} showLeaveReviewButton {openAddReviewDialog}/>
                </div>
            {/if}

        </div>
    </MediaQuery>
    

</div>