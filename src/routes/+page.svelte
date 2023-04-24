<script lang="ts">
	import { invalidateAll } from "$app/navigation";
	import { auth } from "$lib/firebase/firebase.client";
	import { signOut } from "firebase/auth";
	import Textfield from "$lib/components/textfield/Textfield.svelte";

    import type { PageData } from "./$types";;
	import { enhance } from "$app/forms";

    export let data: PageData;

    $: isLoggedIn = data.currentUser !== null;
    const restaurantImageSrc: string = "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
    const mexicanFoodSrc: string = "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
    const dessertsFoodSrc: string = "https://images.unsplash.com/photo-1560180474-e8563fd75bab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
    const americanFoodSrc: string = "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80";
    const japaneseFoodSrc: string = "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80";

</script>

<div class="flex flex-col w-full items-center h-full">
    <div class="px-3 relative bg-origin-border bg-center bg-no-repeat bg-cover flex w-full justify-center min-h-[250px] h-2/5 before:opacity-40 items-center bg-blend-multiply bg-primary-80/40 " 
    style="background-image: url({restaurantImageSrc});"
    >
        <div class="absolute inset-0 w-full h-full bg-white bg-opacity-40"/>
        <form method="POST" use:enhance >
            <Textfield
                withLeadingIcon
                iconName="Search"
                label="Search for restaurants..."
                hideLabelOnFocus
                width="25rem"
                input$name="search"
                input$data-test-id="searchRestaurants"
            />
        </form>
        
    </div>

    <section class="h-full grow max-w-7xl w-full flex flex-col">
        <h1 class="px-10 my-10 text-secondary-100 text-3xl font-semibold">
            Explore restaurants near you...
        </h1>
        <div class="px-10 grow ">
            <div class="grid gap-14 md:grid-cols-2 h-full">

                <a href="/restaurants?categories=mexican">
                    <div class="bg-black/30 bg-blend-multiply rounded-3xl h-full min-h-[10rem]
                    flex justify-center items-center
                    bg-origin-border bg-center bg-no-repeat bg-cover"
                    style="background-image: url({mexicanFoodSrc});"
                    >
                        <h2 class="font-bold drop-shadow-lg text-white text-5xl tracking-widest">Mexican</h2>
        
                    </div> 
                </a>

                <a href="/restaurants?categories=desserts">
                    <div class="bg-black/30 bg-blend-multiply rounded-3xl h-full min-h-[10rem]
                    flex justify-center items-center
                    bg-origin-border bg-center bg-no-repeat bg-cover"
                    style="background-image: url({dessertsFoodSrc});"
                    >
                        <h2 class="font-bold drop-shadow-lg text-white text-5xl tracking-widest">Desserts</h2>
        
                    </div> 
                </a>

                <a href="/restaurants?categories=american">
                    <div class="bg-black/30 bg-blend-multiply rounded-3xl h-full min-h-[10rem]
                    flex justify-center items-center
                    bg-origin-border bg-center bg-no-repeat bg-cover"
                    style="background-image: url({americanFoodSrc});"
                    >
                        <h2 class="font-bold drop-shadow-lg text-white text-5xl tracking-widest">American</h2>
        
                    </div> 
                </a>

                <a href="/restaurants?categories=japanese">
                    <div class="bg-black/30 bg-blend-multiply rounded-3xl h-full min-h-[10rem]
                    flex justify-center items-center
                    bg-origin-border bg-center bg-no-repeat bg-cover"
                    style="background-image: url({japaneseFoodSrc});"
                    >
                        <h2 class="font-bold drop-shadow-lg text-white text-5xl tracking-widest">Japanese</h2>
        
                    </div> 
                </a>
                
            </div>
            

            
            
        </div>
    </section>
    
</div>
